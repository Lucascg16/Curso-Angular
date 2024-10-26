import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent {
  aluno: any;
  constructor(private route: ActivatedRoute, private _service: AlunoService){
    route.params.subscribe(
      (param:any) => {
        let id = param['id'];
        this.aluno = _service.getAluno(id);
      }
    );
  }

  ngOndestroy(){
   this.route.params.subscribe().unsubscribe(); 
  }
}
