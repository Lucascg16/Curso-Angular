import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos: string[] = ["Angular 2", "Java", "Python", "C#"];
  emitter = new EventEmitter<string>();

  constructor(private _log: LogService) { 
  }

  getCursos(){
    this._log.Log("Obtento a lista de cursos")
    return this.cursos;
  }

  addCursos(curso: string){
    this._log.Log(`Adicionando ${curso} à lista`)
    this.cursos.push(curso);
    this.emitter.emit(curso);
  }

  sortArray(){
    this._log.Log("Ordenando o array de cursos")
    this.cursos.sort();
  }
}
