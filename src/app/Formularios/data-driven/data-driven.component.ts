import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-driven',
  standalone: true,
  imports: [ReactiveFormsModule, FormDebugComponent],
  templateUrl: './data-driven.component.html',
  styleUrl: './data-driven.component.css'
})
export class DataDrivenComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null],
        cidade: [null],
        estado: [null]
      })
    });
  }

  onSub() {
    console.log(this.form.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(response => {
      console.log(response);
      this.resetFormSubmit();
    });
  }

  resetFormSubmit() {
    this.form.reset();
  }

  consultaCep() {
    let cep: string = this.form.get('endereco.cep')?.value;

    cep = cep.replace(/\D/g, '');
    if (cep != "") {
      var validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        this.resetFormData()
        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(
          (data) => this.populaForm(data)
        );
      }
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
}
