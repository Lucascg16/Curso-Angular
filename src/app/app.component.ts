import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CursoAngular';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService, private router: Router){
    this.authService.authEmitter.subscribe(
      (auth) => this.mostrarMenu = auth
    );
  }
}
