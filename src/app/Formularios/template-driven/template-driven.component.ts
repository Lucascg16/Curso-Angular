import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { ConsultaCepService } from '../../shared/services/consulta-cep.service';

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

  constructor(private http: HttpClient, private _cepService: ConsultaCepService){}

  onSub(form:NgForm){
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe(response => console.log(response))
  }

  consultaCep(value: any, form:NgForm){
    let cep: string = value.value;

    if(cep != null && cep !== ''){
      this._cepService.consultaCep(cep).subscribe(dados => this.populaForm(dados, form));
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
