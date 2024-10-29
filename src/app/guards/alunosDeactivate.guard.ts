import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { Observable } from "rxjs";
import { IFormDeactivate } from "./IFormCanDeactivate";

@Injectable({
    providedIn: 'root'
})
export class alunosDeactivateGuard implements CanDeactivate<IFormDeactivate> {

    canDeactivate(component: IFormDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean> | boolean { 
        return component.canDeactivate();    
    }
}