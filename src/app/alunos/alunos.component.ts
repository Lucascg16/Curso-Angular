import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  alunos: any[] = [];
  
  constructor(private _service: AlunoService){
    this.alunos = this._service.getAlunos();
  }
}
