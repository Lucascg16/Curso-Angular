import { Component } from '@angular/core';

import { CommandServiceService } from './command-service.service';

@Component({
  selector: 'app-c-detalhado',
  standalone: true,
  imports: [],
  templateUrl: './c-detalhado.component.html',
  styleUrl: './c-detalhado.component.css'
})
export class CDetalhadoComponent {
  nomePoral: string;
  cursos: string[];
  constructor(private commandService: CommandServiceService){
    this.nomePoral = "https://loiane.training/";
    this.cursos = commandService.Getcursos();
  }
}
