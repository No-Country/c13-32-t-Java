import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IselectOption } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-form-register-employer-init',
  templateUrl: './form-register-employer-init.component.html',
  styleUrls: ['./form-register-employer-init.component.css']
})
export class FormRegisterEmployerInitComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      identify: this.formBuilder.group({
        type: ['', Validators.required],
        value: ['', Validators.required],
      }),
      location: this.formBuilder.group({
        province: ['', Validators.required],
        city: ['', Validators.required],
      }),
      condition: this.formBuilder.group({
        condicionFiscal: ['', Validators.required],
      }),
      phone: ['', Validators.required],
      termsAndConditions: this.formBuilder.group({
        legalConditions: ['', Validators.required],
        sendingEmailsPolicy: ['', Validators.required],
      }),
      myGroup: this.formBuilder.group({
        selectedOption: ['option1', Validators.required],
      }),
    });
  }

  indentifyTypes: IselectOption[] = [
    { name: 'Monotributista', value: 'CC' },
    { name: 'Responsable inscripto', value: 'CE' },
    { name: 'Responsable no inscripto', value: 'CE' },
    { name: 'sujeto exento', value: 'CE' },
  ];

  getControlErrors(controlName: string) {
    return this.form.get(controlName)?.errors || {};
  }
}
