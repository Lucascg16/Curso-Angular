import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos = [{id: 1, Nome: 'Angular2'}, {id: 2, Nome: 'Java'}];
  emitter = new EventEmitter<string>();

  constructor(private _log: LogService) { 
  }

  getCursos(){
    this._log.Log("Obtendo a lista de cursos")
    return this.cursos;
  }

  getCurso(id: number){
    return this.cursos.find(x => x.id == id);
  }

  addCursos(curso: any){
    this._log.Log(`Adicionando ${curso} à lista`)
    this.cursos.push(curso);
    this.emitter.emit(curso);
  }

  sortArray(){
    this._log.Log("Ordenando o array de cursos")
    this.cursos.sort();
  }
}
