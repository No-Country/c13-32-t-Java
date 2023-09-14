import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IselectOption } from 'src/app/shared/models/interfaces';
import {PersonalInfoService} from './personal-information.service';
import { User } from './User';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent {
  constructor(private router: Router, private personalInfoService: PersonalInfoService) {
   
  }

  form: FormGroup = new FormGroup({
    userName: this.textInput(),
    password: this.textInput(),
    firstName: this.textInput(),
    lastName: this.textInput(),
    bornDate: new FormGroup({
      day: this.textInput(),
      month: this.textInput(),
      year: this.textInput(),
    }),
    identify: new FormGroup({
      type: this.textInput(),
      value: this.textInput(),
    }),
    location: new FormGroup({
      province: this.textInput(),
      city: this.textInput(),
    }),
    phone: this.textInput(),
    termsAndConditions: new FormGroup({
      legalConditions: this.textInput(),
      sendingEmailsPolicy: this.textInput(),
    }),
  });

  days: IselectOption[] = Array(31)
    .fill(null)
    .map((el, index) => ({ value: index + 1, name: index + 1 }));
  months: IselectOption[] = [
    { name: 'January', value: 'january' },
    { name: 'February', value: 'february' },
    { name: 'March', value: 'march' },
    { name: 'April', value: 'april' },
    { name: 'May', value: 'may' },
    { name: 'June', value: 'june' },
    { name: 'July', value: 'july' },
    { name: 'August', value: 'august' },
    { name: 'September', value: 'september' },
    { name: 'October', value: 'october' },
    { name: 'November', value: 'november' },
    { name: 'December', value: 'december' },
  ];
  years: IselectOption[] = Array(50)
    .fill(null)
    .map((el, index) => ({ value: 1970 + index, name: 1970 + index }));

  indentifyTypes: IselectOption[] = [
    { name: 'Cédula de ciudadania', value: 'CC' },
    { name: 'Cédula extranjera', value: 'CE' },
    { name: 'DNI', value: 'DNI' },
    { name: 'pasaporte', value: 'Pasaporte' },
    { name: 'CUIT', value: 'CUIT' },
  ];

  private textInput(defaultValue?: string | null): FormControl {
    return new FormControl(defaultValue || '', [Validators.required]);
  }

  getControlErrors(controlName: string): ValidationErrors {
    return this.form?.get(controlName)?.errors || {};
  }

  addUser(): void {
    this.router.navigateByUrl('/dashboard-employee');
    const {
      userName, password 
    }
    = this.form.getRawValue();
    this.personalInfoService.addUser({userName, password });
  }
}