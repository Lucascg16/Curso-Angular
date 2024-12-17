import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { HttpClient } from '@angular/common/http';
import { DropDownService } from '../drop-down.service';
import { estados } from '../../Model/estados';
import { ConsultaCepService } from '../../shared/services/consulta-cep.service';
import { AsyncPipe } from '@angular/common';
import { distinctUntilChanged, Observable, tap } from 'rxjs';
import { ErrorMsgComponent } from "../shared/error-msg/error-msg.component";
import { FormValidations } from '../shared/form-validator';
import { InputFieldComponent } from '../shared/input-field/input-field.component';

@Component({
  selector: 'app-data-driven',
  standalone: true,
  imports: [ReactiveFormsModule, FormDebugComponent, AsyncPipe, ErrorMsgComponent, InputFieldComponent],
  templateUrl: './data-driven.component.html',
  styleUrl: './data-driven.component.css'
})
export class DataDrivenComponent{
  form: FormGroup;
  estados: Observable<estados[]>;
  cargos: any[];
  tech: any[];
  newsOp: any[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private _dropServices: DropDownService, private _cepService: ConsultaCepService) {
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.estados = this._dropServices.getEstados();
    this.cargos = this._dropServices.getCargos();
    this.tech = this._dropServices.getTech();
    this.newsOp = this._dropServices.getNews();

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null],
        cidade: [null],
        estado: [null]
      }),
      cargo: [null],
      tech: [null],
      newsLetter: ['n'],
      termo: [false, Validators.pattern('true')]
    });

    this.form.get('endereco.cep')?.statusChanges
    .pipe(
      distinctUntilChanged(),
      tap()
    )
    .subscribe(status =>{
      if(status === "VALID"){
        this._cepService.consultaCep(this.form.get('endereco.cep')?.value).subscribe(dados => this.populaForm(dados));
      }
    });
  }

  onSub() {
    if (this.form.invalid) {
      this.verificaValidacoesForm(this.form)
      return;
    }

    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(response => {
      console.log(response);
      this.resetFormSubmit();
    });
  }

  verificaValidacoesForm(form: FormGroup) {
    Object.keys(form.controls).forEach(campo => {
      console.log(campo);
      const controle = form.get(campo);
      controle?.markAsTouched();

      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    })
  }

  resetFormSubmit() {
    this.form.reset();
  }

  consultaCep() {
    let cep: string = this.form.get('endereco.cep')?.value;

    if (cep != null && cep !== '') {
    }
  }

  populaForm(data: any) {
    this.form.patchValue({
      endereco: {
        cep: data.cep,
        complemento: data.complemento,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
      }
    })
  }

  resetFormData() {
    this.form.patchValue({
      Endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  verificaValidTouched(campo: string) {
    return !this.form.get(campo)?.valid && this.form.get(campo)?.touched;
  }

  verificaEmailValido() {
    let campoEmail = this.form.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
  
  setCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pl', desc: 'Dev Pl' };
    this.form.get('cargo')?.setValue(cargo);
  }

  comparaCargos(obj1: any, obj2: any){
    return obj1 & obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }
}
