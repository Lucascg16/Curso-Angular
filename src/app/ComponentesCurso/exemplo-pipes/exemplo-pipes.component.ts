import { Component } from '@angular/core';
import { UpperCasePipe, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { CamelCasePipe } from '../../shared/pipes/camel-case.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo-pipes',
  standalone: true,
  imports: [UpperCasePipe, DecimalPipe, DatePipe, CurrencyPipe, CamelCasePipe, FormsModule],
  templateUrl: './exemplo-pipes.component.html',
  styleUrl: './exemplo-pipes.component.css'
})
export class ExemploPipesComponent {
  livro: any = {
    titulo: "Aprendendo o funcionamento do computador a fundo",
    notaGeral: 4.54239,
    paginas: 314,
    preco: 44.99,
    lancamento: new Date(2016, 5, 23),
    url: "Aqui não tem nada kkk"
  }
  livros: string[] = ['C#',  'Angular 2', "java", 'py'];
  filtro: string = '';


  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined){
      return this.livros
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }
}
