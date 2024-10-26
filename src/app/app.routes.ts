import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'curso', loadChildren: () => import('./cursos/cursos.routes').then(r => r.CursoRoutes)},
    {path: 'aluno', loadChildren: () => import('./alunos/alunos.routes').then(r => r.alunosRoutes)}
];