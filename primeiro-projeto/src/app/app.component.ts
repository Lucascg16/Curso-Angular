import { Component } from '@angular/core';
import { CDetalhadoComponent } from './c-detalhado/c-detalhado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CDetalhadoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
