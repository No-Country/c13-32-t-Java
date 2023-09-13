import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  email: string = '';
  password: string = '';
  ingresar() {
    if ( this.email && this.password) {
      // Limpia los campos después del registro
      this.email = '';
      this.password = '';
    } else {
      console.log('Completa todos los campos');
    }
  }
}
