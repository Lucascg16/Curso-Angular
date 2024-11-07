import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.alternativeColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }
  
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @Input() defaultColor: string = 'white';
  @Input() alternativeColor:string = 'blue';
  
  constructor() {
    this.defaultColor = 'grey';
   }
}
