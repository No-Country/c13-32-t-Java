import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
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
