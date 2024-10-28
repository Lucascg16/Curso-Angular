import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioAuth = false;
  authEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario' && usuario.senha === '123456'){
      this.usuarioAuth = true;

      this.authEmitter.emit(true);
      this.router.navigate(["/home"]);
    }else{
      this.usuarioAuth = false;
      this.authEmitter.emit(false)
    }
  }
}
