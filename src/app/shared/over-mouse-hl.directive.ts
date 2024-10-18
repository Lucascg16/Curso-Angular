import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[OverMouseHL]',
  standalone: true
})
export class OverMouseHLDirective {
  @HostListener('mouseenter') onMouseOver(){
    // this._ren.setStyle(this._ref.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._ren.setStyle(this._ref.nativeElement, 'background-color', 'white');
    this.backgroundColor = "white";
  }
  
  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  constructor() { }

}
