import { Component } from '@angular/core';
import { FundoAmareloDirective } from '../../shared/diretivas/fundo-amarelo.directive';
import { OverMouseHLDirective } from '../../shared/diretivas/over-mouse-hl.directive';
import { HighlightDirective } from '../../shared/diretivas/highlight.directive';

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [FundoAmareloDirective,
    OverMouseHLDirective,
    HighlightDirective
  ],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {

}
