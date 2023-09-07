import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  animations: [
    trigger('slideDown', [
      state('hidden', style({ height: '0', opacity: 0 })),
      state('visible', style({ height: '*', opacity: 1 })),
      transition('hidden => visible', [
        animate('300ms ease-in-out')
      ]),
      transition('visible => hidden', [
        animate('300ms ease-in-out')
      ]),
    ])
  ]
  
})
export class RegisterPageComponent {
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
