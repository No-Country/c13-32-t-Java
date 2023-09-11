import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'shared-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() errors!: ValidationErrors;
  value!: string;
  onChangeFn!: Function;

  get errorsArray(): string[] {
    const errorsTypes: Record<string, string> = {
      required: 'Este campo es requerido',
    };
    const errorsFound: string[] = [];
    Object.keys(this.errors || {} || {}).forEach(
      (errorKey: string) =>
        errorsTypes[errorKey] && errorsFound.push(errorsTypes[errorKey])
    );
    return errorsFound;
  }

  onInputChange($event: any) {
    this.onChangeFn($event.target.checked);
  }

  writeValue(newValue: string): void {
    this.value = newValue;
  }

  registerOnChange(fn: Function): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {}
}
