import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent {
  id: number = 0;
  inscricao: Subscription = new Subscription();
  curso: any;

  constructor(private _route:ActivatedRoute, private _service: CursosService, private _router: Router){
  }

  ngOnInit(){
    this.inscricao = this._route.params.subscribe(
      (params: any) => { 
        this.id = params['id']; 
        this.curso = this._service.getCurso(this.id);

        if(this.curso == undefined){
          this._router.navigate([`/erroCurso/${this.id}`]);
        }
      }
    );
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
