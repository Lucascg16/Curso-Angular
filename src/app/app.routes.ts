import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: '', component: LoginComponent},
    {path: 'curso', loadChildren: () => import('./cursos/cursos.routes').then(r => r.CursoRoutes), canActivate: [AuthGuard]},
    {path: 'aluno', loadChildren: () => import('./alunos/alunos.routes').then(r => r.alunosRoutes),canActivate: [AuthGuard]}
];