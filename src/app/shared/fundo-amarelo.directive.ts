import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]',
  standalone: true
})
export class FundoAmareloDirective {

  constructor(private _ref: ElementRef,
    private _ren: Renderer2
  ) {
    // this._ref.nativeElement.style.backgroundColor = "yellow"; 
    this._ren.setStyle(_ref.nativeElement, 'background-color', 'yellow')
  }
}
