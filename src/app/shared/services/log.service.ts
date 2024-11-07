import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  Log(mensagem: string){
    console.log(mensagem)
  }
}
