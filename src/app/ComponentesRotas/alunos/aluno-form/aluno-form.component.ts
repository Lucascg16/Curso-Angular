import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute } from '@angular/router';
import { IFormDeactivate } from '../../guards/IFormCanDeactivate';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
})
export class AlunoFormComponent implements IFormDeactivate{
  aluno: any;
  private editou = false;

  constructor(private _service:AlunoService, private _acRoute: ActivatedRoute){
    this._acRoute.params.subscribe(
      (param) => {
        this.aluno = this._service.getAluno(param['id']);
        console.log(this.aluno)
      }
    )
  }
  canDeactivate(): boolean {
    return this.mudarRota();
  }

  mudarRota(){
    if(this.editou){
      return confirm("Deseja realmente sair do formulário?")
    }
    return true;
  }
  onInput(){
    this.editou = true;
  }
}
