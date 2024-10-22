import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-erro',
  standalone: true,
  imports: [],
  templateUrl: './curso-erro.component.html',
  styleUrl: './curso-erro.component.css'
})
export class CursoErroComponent {
  id: number = 0;
  sub: any;
  
  constructor(private _route: ActivatedRoute){
    this.sub = this._route.params.subscribe(
      (params: any) => {
        this.id = params.id
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
