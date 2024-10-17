import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;
  @Output() mudouValor: EventEmitter<any> = new EventEmitter();

  @ViewChild("campoInput") campoValorInput!: ElementRef;
 
  constructor(){
    
  }

  AlteraValor(incrementa: boolean){
    if(incrementa){
      this.campoValorInput.nativeElement.value++;
      this.mudouValor.emit({novoValor: this.valor});
    }else{
      this.campoValorInput.nativeElement.value--;
      this.mudouValor.emit({novoValor: this.valor});
    }
  }
}
