import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { IselectOption } from '../../models/interfaces';

@Component({
  selector: 'shared-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() options!: IselectOption[];
  @Input() errors!: ValidationErrors;
  value!: string;
  onChangeFn!: Function;

  get errorsArray(): string[] {
    const errorsTypes: Record<string, string> = {
      required: 'Este campo es requerido',
    };
    const errorsFound: string[] = [];
    Object.keys(this.errors || {}).forEach(
      (errorKey: string) =>
        errorsTypes[errorKey] && errorsFound.push(errorsTypes[errorKey])
    );
    return errorsFound;
  }

  onInputChange($event: any) {
    this.onChangeFn($event.target.value);
  }

  writeValue(newValue: string): void {
    this.value = newValue;
  }

  registerOnChange(fn: Function): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {}
}
