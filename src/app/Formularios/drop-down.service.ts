import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { estados } from '../Model/estados';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  constructor(private _http:HttpClient) { }

  getEstados(){
    return this._http.get<estados[]>('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/refs/heads/master/Estados.json')
  }
}
