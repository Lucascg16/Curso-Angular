import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoErroComponent } from './cursos/curso-erro/curso-erro.component';
import { alunosRoutes } from './alunos/alunos.routes';
import { AlunosComponent } from './alunos/alunos.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'curso/:id', component: CursoDetalheComponent},
    {path: 'erroCurso/:id', component: CursoErroComponent},
    {path: 'aluno', component: AlunosComponent, children: alunosRoutes}
];