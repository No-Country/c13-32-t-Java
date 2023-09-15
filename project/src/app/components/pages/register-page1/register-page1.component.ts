import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page1',
  templateUrl: './register-page1.component.html',
  styleUrls: ['./register-page1.component.css']
})
export class RegisterPage1Component {
  username: string = '';
  email: string = '';
  password: string = '';

  registrar() {
    if (this.username && this.email && this.password) {
      // Lógica de registro aquí
      console.log('Usuario registrado:', this.username);
      // Limpia los campos después del registro
      this.username = '';
      this.email = '';
      this.password = '';
    } else {
      console.log('Completa todos los campos');
    }
  }
  formState = 'hidden';

  toggleForm() {
    this.formState = this.formState === 'hidden' ? 'visible' : 'hidden';
  }
}
