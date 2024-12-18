import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { estados } from '../Model/estados';
import { cidade } from '../Model/cidade';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  constructor(private _http: HttpClient) { }

  getEstados() {
    return this._http.get<estados[]>('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/refs/heads/master/Estados.json')
  }

  getCidades(idEstado: number) {
    return this._http.get<cidade[]>('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/refs/heads/master/Cidades.json')
      .pipe(
        map((cidades: cidade[]) => idEstado != 0 ? cidades.filter(c => c.Estado == idEstado) : cidades)
      );
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Jr', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pl', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Sr', desc: 'Dev Sr' }
    ]
  }

  getTech() {
    return [
      { nome: 'Java', desc: 'Java' },
      { nome: 'Python', desc: 'Python' },
      { nome: 'PHP', desc: 'PHP' },
      { nome: 'Angular', desc: 'Angular' }
    ]
  }

  getNews() {
    return [
      { valor: 's', desc: 'sim' },
      { valor: 'n', desc: 'não' }
    ]
  }
}
