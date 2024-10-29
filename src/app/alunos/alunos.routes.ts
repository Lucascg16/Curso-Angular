import { Routes } from "@angular/router";

import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosComponent } from "./alunos.component";
import { alunosDeactivateGuard } from "../guards/alunosDeactivate.guard";
import { AlunoDetalheResolver } from "./guards/alunoDetalhe.resolver";


export const alunosRoutes: Routes = [
    {
        path: '',
        component: AlunosComponent,
        children: [
            {path: 'novo', component: AlunoFormComponent},
            {path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver}},
            {path: ':id/editar', component: AlunoFormComponent, canDeactivate: [alunosDeactivateGuard]}
        ]
    }
]