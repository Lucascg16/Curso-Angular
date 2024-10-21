import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-criado',
  standalone: true,
  imports: [],
  templateUrl: './curso-criado.component.html',
  styleUrl: './curso-criado.component.css'
})
export class CursoCriadoComponent {
  curso: string = '';

  constructor(private cursoService: CursosService){
    this.cursoService.emitter.subscribe(
      cursoCriado  => this.curso = cursoCriado
    )
  }
  
}
