import { Component } from '@angular/core';

@Component({
  selector: 'app-elvis',
  standalone: true,
  imports: [],
  templateUrl: './elvis.component.html',
  styleUrl: './elvis.component.css'
})
export class ElvisComponent {
  tarefa: any = {
    desc: "Descrição da tarefa",
    responsavel: null
  };
}
