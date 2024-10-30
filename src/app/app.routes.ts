import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'templateForm', component: TemplateDrivenComponent},
    {path: 'dataForm', component: DataDrivenComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component:PaginaErroComponent}
];