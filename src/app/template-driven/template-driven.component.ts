import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, FormDebugComponent],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  alguem: any = {
    nome: null,
    email: null
  };
  
  constructor(private http: HttpClient){}

  onSub(form:NgForm){
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe(response => console.log(response))
  }

  consultaCep(value: any, form:NgForm){
    let cep: string = value.value;

    cep = cep.replace(/\D/g, '');
    if(cep != ""){
      var validaCep = /^[0-9]{8}$/;

      if(validaCep.test(cep)){
        this.resetForm(form)  
        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(
          (data) => this.populaForm(data, form)
        );
      }
    }
  }

  populaForm(data: any, form:NgForm){
    // form.setValue({
    //   email: form.value.email,
    //   nome: form.value.nome,
    //   Endereco: {
    //     cep: data.cep,
    //     numero: form.value.numero,
    //     complemento: data.complemento,
    //     rua: data.logradouro,
    //     bairro: data.bairro,
    //     cidade: data.localidade,
    //     estado: data.uf
    //   }
    // });
    form.form.patchValue({
      Endereco: {
        cep: data.cep,
        complemento: data.complemento,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
      }
    });
  }

  resetForm(form:NgForm){
    form.form.patchValue({
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
}
