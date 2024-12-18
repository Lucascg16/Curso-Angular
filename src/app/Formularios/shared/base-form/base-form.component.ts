import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  standalone: true,
  imports: [],
  template: '<div></div>'
})
export abstract class BaseFormComponent {
  form: FormGroup;
  abstract submit(): any;

  constructor(){ }

  onSub(){
    if(this.form.valid){
      this.submit();
    }else{
      this.verificaValidacoesForm(this.form)
    }
  }

  verificaValidacoesForm(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach(campo => {
      const controle = form.get(campo);

      controle?.markAsTouched();
      controle?.markAsDirty();

      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    })
  }

  resetFormSubmit() {
    this.form.reset();
  }

  verificaValidTouched(campo: string) {
    return !this.form.get(campo)?.valid && this.form.get(campo)?.touched;
  }

  verificaEmailValido() {
    let campoEmail = this.form.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  getCampo(campo: string){
    return this.form.get(campo);
  }
}
