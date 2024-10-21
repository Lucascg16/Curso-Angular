import { Component } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursoCriadoComponent } from '../curso-criado/curso-criado.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursoCriadoComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent {
  cursos: string[] = [];

  constructor(private cursoService: CursosService){
    this.cursos = cursoService.getCursos();
  }

  onAddCurso(curso:string){
    this.cursoService.addCursos(curso);
  }

  onSortArray(){
    this.cursoService.sortArray();
  }
}