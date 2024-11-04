import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './data-driven.component.html',
  styleUrl: './data-driven.component.css'
})
export class DataDrivenComponent {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.form = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }
}
