import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,ValidationErrors,Validators,} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { IselectOption } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-form-register-employer-second',
  templateUrl: './form-register-employer-second.component.html',
  styleUrls: ['./form-register-employer-second.component.css']
})
export class FormRegisterEmployerSecondComponent implements OnInit {
  public previsualizacion?: string;
  public archivos: any = []
  public loading?: boolean

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  capturarFile(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      const archivoCapturado = inputElement.files?.[0];
  
      if (archivoCapturado) {
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          if (imagen) {
            this.previsualizacion = imagen.base;
            console.log(imagen);
          } else {
            console.error("No se pudo cargar la imagen.");
          }
        });
  
        this.archivos.push(archivoCapturado);
      } else {
        console.error("No se seleccionó ningún archivo.");
      }
    }
  }
  
  


  extraerBase64 = async (file: File | null): Promise<{ base: string } | string> => {
    return new Promise((resolve) => {
      if (!file) {
        resolve("No se seleccionó ningún archivo.");
        return;
      }
  
      const reader = new FileReader();
  
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          resolve({ base: e.target.result as string });
        } else {
          resolve("No se pudo cargar la imagen.");
        }
      };
  
      reader.onerror = () => {
        resolve("Error al cargar la imagen.");
      };
  
      reader.readAsDataURL(file);
    });
  }
  

  /**
   * Limpiar imagen
   */

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }

 

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        // Realizar acciones con el archivo seleccionado, como cargarlo o procesarlo.
        console.log(`Archivo seleccionado: ${file.name}`);
        // Aquí puedes agregar tu lógica para cargar o procesar el archivo.
    } 
  }
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

