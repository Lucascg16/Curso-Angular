import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormValidations } from '../form-validator';

@Component({
  selector: 'app-error-msg',
  standalone: true,
  imports: [],
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.css'
})
export class ErrorMsgComponent {
  //@Input() msgErro: string = "";
  //@Input() mostrarErro: boolean = false;

  @Input() control: any;
  @Input() label: string = "";
  
   constructor(){ }

   get errorMessage(){
    for(let propName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propName) && this.control.touched){
        return FormValidations.getErrorMsg(this.label, propName, this.control.errors[propName])
      }
    }
   }
 }