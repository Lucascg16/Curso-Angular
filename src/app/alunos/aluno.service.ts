import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos = [
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
