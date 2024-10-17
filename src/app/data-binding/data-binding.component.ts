import { Component } from '@angular/core';
import { FormsModule }  from '@angular/forms'

import { InputComponent } from '../input/input.component';
import { OutputPropertyComponent } from '../output-property/output-property.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule,
    InputComponent,
    OutputPropertyComponent
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url: string = "{{ variavel aqui dentro }} - essa string foi interpolada"; 
  urlImage: string = "http://lorempixel.com/400/200/nature/";
  nome: string = "acb";
  nomeCurso: string = "Angular";
  
  getValorRamdom(){
    return 1+1+1+1+1+1;
  }

  mostrarmensagem(){
    alert("não se atreva!");
  }

  valorDigitado: string = "";
  onKeyUp(evento: KeyboardEvent){
    	this.valorDigitado += (<HTMLInputElement>evento.target).value;
      if(this.valorDigitado.length > 10){
        this.valorDigitado == "";
      }
  }

  stringsalva: string = "";
  salvarstring(valor: string){
    this.stringsalva = valor;
  }

  onValorMuda(evento: any){
    console.log(evento.novoValor);
  }
}
