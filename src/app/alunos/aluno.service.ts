import { Injectable } from '@angular/core';
import { Aluno } from '../Model/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = [
    {id: 1, nome: "Aluno 01", email: "aluno01@email.com"},
    {id: 2, nome: "Aluno 02", email: "aluno02@email.com"},
    {id: 3, nome: "Aluno 03", email: "aluno03@email.com"}
  ];
  
  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: any){
    return this.alunos.find(x => x.id == id);
  }
}
