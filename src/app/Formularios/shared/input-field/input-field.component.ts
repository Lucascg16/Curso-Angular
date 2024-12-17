import { Component, forwardRef, Input } from '@angular/core';
import { ErrorMsgComponent } from '../error-msg/error-msg.component';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

const   INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
};

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [ErrorMsgComponent, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor{
  @Input() id: string = "";
  @Input() label: string = "";
  @Input() type = "text";
  @Input() control: any;
  @Input() isReadOnly = false;

  private innerValue: any;

  get value(){
    return this.innerValue;
  }
  set value(v: any){
    if (v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCallBack(v);
    }
  }

  constructor(){}

  onChangeCallBack: (_: any) => void = () => {};
  onTouchedCallBack: (_: any) => void = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallBack = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallBack = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }
}
