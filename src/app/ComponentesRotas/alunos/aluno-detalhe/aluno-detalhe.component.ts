import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../../Model/aluno';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent {
  aluno: Aluno = new Aluno();
  constructor(private route: ActivatedRoute, private _service: AlunoService, private _router:Router){
    this.route.data.subscribe(
      (info) => {
        this.aluno = info['aluno'];
      }
    );
  }

  ngOndestroy(){
    this.route.params.subscribe().unsubscribe(); 
  }

  Editar(){
    this._router.navigate([`aluno/${this.aluno.id}/editar`]);
  }
}
