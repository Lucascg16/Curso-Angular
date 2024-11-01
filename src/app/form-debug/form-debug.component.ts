import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-debug',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './form-debug.component.html',
  styleUrl: './form-debug.component.css'
})
export class FormDebugComponent {
  @Input() form: any;

  constructor(){}
}
