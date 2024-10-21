import { Component } from '@angular/core';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivaSwitchComponent } from './diretiva-switch/diretiva-switch.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { ElvisComponent } from './elvis/elvis.component';
import { ContentComponent } from './content/content.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CursosComponent } from './cursos/cursos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataBindingComponent,
    DiretivaSwitchComponent,
    DiretivaIfComponent,
    ElvisComponent,
    ContentComponent,
    CustomDirectiveComponent,
    CursosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CursoAngular';
}
