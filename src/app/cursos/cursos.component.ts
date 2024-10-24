import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

import { CursosService } from './cursos.service';
import { CursoCriadoComponent } from './curso-criado/curso-criado.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursoCriadoComponent, RouterLink],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent {
  cursos: any[] = [];
  pagina: number = 0;

  constructor(private cursoService: CursosService, private _route: ActivatedRoute, private _router: Router){
    this.cursos = cursoService.getCursos();

    this._route.queryParamMap.subscribe( 
      (params: any) => { this.pagina = params.params['pagina']; }
    );
  }

  ngOnDestroy(){
    this._route.queryParamMap.subscribe().unsubscribe();
  }

  onAntPag(){
    if(this.pagina > 1){
      this._router.navigate(['/cursos]', {
        queryParams: { 'pagina': --this.pagina}}
      ]);
    }
  }
  OnproxPag(){
    this._router.navigate(['/cursos'], {
      queryParams: {'pagina': ++this.pagina}
    })
  }
  
  onAddCurso(curso:string){
    this.cursoService.addCursos(curso);
  }

  onSortArray(){
    this.cursoService.sortArray();
  }
}
