import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario = new Usuario('', '');

  constructor(private authService: AuthService) { }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }
}
