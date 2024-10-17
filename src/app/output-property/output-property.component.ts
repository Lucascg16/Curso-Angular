import { Component, EventEmitter, Input, Output } from '@angular/core';

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
 
  AlteraValor(incrementa: boolean){
    if(incrementa){
      this.valor ++;
      this.mudouValor.emit({novoValor: this.valor});
    }else{
      this.valor --;
      this.mudouValor.emit({novoValor: this.valor});
    }
  }
}
