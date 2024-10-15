import { Component } from '@angular/core';
import { CompomenteGeradoComponent } from './compomente-gerado/compomente-gerado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CompomenteGeradoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
