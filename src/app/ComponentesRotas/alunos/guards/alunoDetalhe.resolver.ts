import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Aluno } from "../../Model/aluno";
import { AlunoService } from "../aluno.service";

@Injectable({
  providedIn: 'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno>{
  constructor(private _alunoService: AlunoService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    let id = route.params['id'];

    return this._alunoService.getAluno(id);
  }
}