import { Component } from '@angular/core';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { OverMouseHLDirective } from '../shared/over-mouse-hl.directive';
import { HighlightDirective } from '../shared/highlight.directive';

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
