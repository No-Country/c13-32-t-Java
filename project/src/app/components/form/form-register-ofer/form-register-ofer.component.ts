import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { IselectOption } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-form-register-ofer',
  templateUrl: './form-register-ofer.component.html',
  styleUrls: ['./form-register-ofer.component.css']
})
export class FormRegisterOferComponent {
 
  form: FormGroup;
  ciudadesPorProvincia: { [key: string]: IselectOption[] } = {};
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      areas: ['', Validators.required],
      jornadas: ['', Validators.required],
      contratacion: ['', Validators.required],
      modalidad: ['', Validators.required],
      sueldo: ['', Validators.required],
      provincia: ['', Validators.required],
      ciudad: ['', Validators.required],
      experiencia: ['', Validators.required],
      disponibilidad: ['', Validators.required],
      jobDescription: ['', Validators.required],
      tareasCumplir:['', Validators.required],
      requisitosPuesto:['', Validators.required],
      beneficiosTrabajador:['', Validators.required],
    });
  }
  



  areas: IselectOption[] = [
    { name: 'Administracion/Oficina', value: 'Administracion' },
    { name: 'Almacén / Logística ', value: 'Logistica' },
    { name: 'Asesoría / Consultoría', value: 'Consultoria' },
    { name: 'Atención al cliente', value: 'Atencion al cliente' },
    { name: 'Producciónn', value: 'Produccion' },
    { name: 'Ventas', value: 'Ventas' },
  
  ];

  jornadas: IselectOption[] = [
    { name: 'Jornada completa', value: '10-20' },
    { name: 'Jornada Part time', value: '20-30' },
    { name: 'Jornada reducida', value: '30-50' },
    { name: 'Trabajo nocturnos', value: '50-100' },
  ];
  contratacion: IselectOption[] = [
    { name: 'Por tiempo indeterminado', value: 'indererminado' },
    { name: 'Contrato fijo', value: 'fijo' },
    { name: 'Eventual o por temporada', value: 'eventual' },
    { name: 'Otro tipo de contrato', value: 'otro' },
  ];
  modalidad: IselectOption[] = [
    { name: 'Precencial', value: 'Presencial' },
    { name: 'Hibrido', value: 'Hibrido' },
    { name: 'Remoto', value: 'Remoto' },
 
  ];
  experiencia: IselectOption[] = [
    { name: 'Trainee', value: 'Trainee' },
    { name: 'Junior', value: 'Junior' },
    { name: 'Semi Senior', value: 'Semi Senior' },
    { name: 'Senior', value: 'Senior' },
    { name: 'Gerencial', value: 'Gerencial' },

  ];
  disponibilidad: IselectOption[] = [
    { name: 'Full Time', value: 'Full Time' },
    { name: 'Part time', value: 'Part time' },
    { name: 'Por la mañana', value: 'Por la mañana' },
    { name: 'Por la tarde', value: 'Por la tarde' },
    { name: 'Nocturno', value: 'Nocturno' },

  ];
  sueldo: IselectOption[] = [
    { name: 'A convenir', value: 'A convenir' },
    { name: 'Hasta $100.000', value: '100000' },
    { name: 'Más de $100.000', value: '100000-150000' },
    { name: 'Más de $150.000', value: '150000-200000' },
    { name: 'Más de $200.000', value: '200000-300000' },
    { name: 'Más de $300.000', value: '300000' },

  ];

  provincia: IselectOption[] = [
    { name: 'Buenos Aires', value: 'Buenos Aires' },
    { name: 'Catamarca', value: 'Catamarca' },
    { name: 'Chaco', value: 'Chaco' },
    { name: 'Chubut', value: 'Chubut' },
    { name: 'Córdoba', value: 'Córdoba' },
    { name: 'Corrientes', value: 'Corrientes' },
    { name: 'Entre Ríos', value: 'Entre Ríos' },
    { name: 'Formosa', value: 'Formosa' },
    { name: 'Jujuy', value: 'Jujuy' },
    { name: 'La Pampa', value: 'La Pampa' },
    { name: 'La Rioja', value: 'La Rioja' },
    { name: 'Mendoza', value: 'Mendoza' },
    { name: 'Misiones', value: 'Misiones' },
    { name: 'Neuquén', value: 'Neuquén' },
    { name: 'Río Negro', value: 'Río Negro' },
    { name: 'Salta', value: 'Salta' },
    { name: 'San Juan', value: 'San Juan' },
    { name: 'San Luis', value: 'San Luis' },
    { name: 'Santa Cruz', value: 'Santa Cruz' },
    { name: 'Santa Fe', value: 'Santa Fe' },
    { name: 'Santiago del Estero', value: 'Santiago del Estero' },
    { name: 'Tierra del Fuego', value: 'Tierra del Fuego' },
    { name: 'Tucumán', value: 'Tucumán' }
  ];
  ciudades: IselectOption[] = [
    { name: 'Buenos Aires', value: 'Buenos Aires' },
    { name: 'Catamarca', value: 'Catamarca' },
    { name: 'Chaco', value: 'Chaco' },
    { name: 'Chubut', value: 'Chubut' },
    { name: 'Córdoba', value: 'Córdoba' },
    { name: 'Corrientes', value: 'Corrientes' },
    { name: 'Entre Ríos', value: 'Entre Ríos' },
    { name: 'Formosa', value: 'Formosa' },
    { name: 'Jujuy', value: 'Jujuy' },
    { name: 'La Pampa', value: 'La Pampa' },
    { name: 'La Rioja', value: 'La Rioja' },
    { name: 'Mendoza', value: 'Mendoza' },
    { name: 'Misiones', value: 'Misiones' },
    { name: 'Neuquén', value: 'Neuquén' },
    { name: 'Río Negro', value: 'Río Negro' },
    { name: 'Salta', value: 'Salta' },
    { name: 'San Juan', value: 'San Juan' },
    { name: 'San Luis', value: 'San Luis' },
    { name: 'Santa Cruz', value: 'Santa Cruz' },
    { name: 'Santa Fe', value: 'Santa Fe' },
    { name: 'Santiago del Estero', value: 'Santiago del Estero' },
    { name: 'Tierra del Fuego', value: 'Tierra del Fuego' },
    { name: 'Tucumán', value: 'Tucumán' }
  ];
  
  private textInput(defaultValue?: string | null): FormControl {
    return new FormControl(defaultValue || '', [Validators.required]);
  }

  getControlErrors(controlName: string): ValidationErrors {
    return this.form?.get(controlName)?.errors || {};
  }

  createOffer(): void {}

}
