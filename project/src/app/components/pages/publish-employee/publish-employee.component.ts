import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { IselectOption } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-publish-employee',
  templateUrl: './publish-employee.component.html',
  styleUrls: ['./publish-employee.component.css'],
})
export class PublishEmployeeComponent {
  form: FormGroup = new FormGroup({
    industry: this.textInput(),
    branchOffices: this.textInput(),
    employees: this.textInput(),
    companyDescription: this.textInput(),
  });

  industries: IselectOption[] = [
    { name: 'Industria Automotriz', value: 'industriaAutomotriz' },
    { name: 'Industria Alimentaria', value: 'industriaAlimentaria' },
    { name: 'Industria Química', value: 'industriaQuimica' },
    { name: 'Industria Electrónica', value: 'industriaElectronica' },
    { name: 'Industria Textil', value: 'industriaTextil' },
    { name: 'Industria Aeroespacial', value: 'industriaAeroespacial' },
    { name: 'Industria Farmacéutica', value: 'industriaFarmaceutica' },
  ];

  ranges: IselectOption[] = [
    { name: '10 - 20 empleados', value: '10-20' },
    { name: '20 - 30 empleados', value: '20-30' },
    { name: '30 - 50 empleados', value: '30-50' },
    { name: '50 - 100 empleados', value: '50-100' },
    { name: '100 - 200 empleados', value: '100-200' },
    { name: '200 - 500 empleados', value: '200-500' },
    { name: 'Más de 500 empleados', value: '500+' },
  ];

  private textInput(defaultValue?: string | null): FormControl {
    return new FormControl(defaultValue || '', [Validators.required]);
  }

  getControlErrors(controlName: string): ValidationErrors {
    return this.form?.get(controlName)?.errors || {};
  }

  createOffer(): void {}
}
