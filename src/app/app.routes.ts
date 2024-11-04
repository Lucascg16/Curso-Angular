import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { DataDrivenComponent } from './Formularios/data-driven/data-driven.component';
import { TemplateDrivenComponent } from './Formularios/template-driven/template-driven.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'templateForm', component: TemplateDrivenComponent},
    {path: 'dataForm', component: DataDrivenComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component:PaginaErroComponent}
];