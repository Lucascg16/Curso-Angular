import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-if',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './diretiva-if.component.html',
  styleUrl: './diretiva-if.component.css'
})
export class DiretivaIfComponent {
  cursos: string[] = [];

  tamanhoFonte: number = 12;
}
