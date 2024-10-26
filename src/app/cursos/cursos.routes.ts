import { Routes } from "@angular/router";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoErroComponent } from "./curso-erro/curso-erro.component";
import { CursosComponent } from "./cursos.component";

export const CursoRoutes: Routes= [
    {path: '',component: CursosComponent},
    {path: ':id', component: CursoDetalheComponent},
    {path: 'erro/:id', component: CursoErroComponent},
]