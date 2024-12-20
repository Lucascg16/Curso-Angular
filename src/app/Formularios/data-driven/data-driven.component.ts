import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { HttpClient } from '@angular/common/http';
import { DropDownService } from '../drop-down.service';
import { estados } from '../../Model/estados';
import { ConsultaCepService } from '../../shared/services/consulta-cep.service';
import { distinctUntilChanged, empty, map, switchMap, tap } from 'rxjs';
import { FormValidations } from '../shared/form-validator';
import { InputFieldComponent } from '../shared/input-field/input-field.component';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { cidade } from '../../Model/cidade';

@Component({
  selector: 'app-data-driven',
  standalone: true,
  imports: [ReactiveFormsModule, FormDebugComponent, InputFieldComponent],
  templateUrl: './data-driven.component.html',
  styleUrl: './data-driven.component.css'
})
export class DataDrivenComponent extends BaseFormComponent {
  estados: estados[];
  cidades: cidade[] = [];
  cargos: any[];
  tech: any[];
  newsOp: any[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private _dropServices: DropDownService, private _cepService: ConsultaCepService) {
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    super();

    this._dropServices.getEstados().subscribe(dados => this.estados = dados);
    this.cidades = [{
      ID: 0,
      Nome: "Por favor, selecione um estado",
      Estado: 0
    }]
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

    this.form.get('endereco.cep')?.statusChanges.pipe(distinctUntilChanged(), tap()).subscribe(status => {
      if (status === "VALID") {
        this._cepService.consultaCep(this.form.get('endereco.cep')?.value).subscribe(dados => this.populaForm(dados));
      }
    });

    this.form.get('endereco.estado')?.valueChanges.pipe(
      //tap(estado => console.log(estado)),
      map(estado => this.estados.filter(e => e.Sigla === estado)),
      map(estados => estados && estados.length > 0 ? estados[0].ID : 0),
      switchMap((estadoId: number) => this._dropServices.getCidades(estadoId)),
    ).subscribe(cidades => this.cidades = cidades);
  }

  override submit() {
    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(response => {
      console.log(response);
      this.resetFormSubmit();
    });
  }

  populaForm(data: any) {
    this.form.patchValue({
      endereco: {
        //cep: data.cep,
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

  setCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pl', desc: 'Dev Pl' };
    this.form.get('cargo')?.setValue(cargo);
  }

  comparaCargos(obj1: any, obj2: any) {
    return obj1 & obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }
}
