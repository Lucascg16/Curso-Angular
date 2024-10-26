import { Routes } from "@angular/router";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosComponent } from "./alunos.component";


export const alunosRoutes: Routes = [
    {
        path: '',
        component: AlunosComponent,
        children: [
            {path: 'novo', component: AlunoFormComponent},
            {path: ':id', component: AlunoDetalheComponent},
            {path: ':id/editar', component: AlunoFormComponent}
        ]
    }
]