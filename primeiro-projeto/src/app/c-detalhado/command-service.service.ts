import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandServiceService {

  constructor() { }

  Getcursos(){
    return ['Java', 'Python', '.Net'];
  }  
}
