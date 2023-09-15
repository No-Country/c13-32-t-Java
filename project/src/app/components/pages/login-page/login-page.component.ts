import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');

    if(token){
      console.log('Redirigiendo a Dashboard-Employer');
      this.router.navigate(['Dashboard-Employer']);
    }
  }

  loginUser(value: any) {
    let { email, password } = value;

    this.authService.login(email, password).subscribe(
      (response) => {
        if(response.token) {
          sessionStorage.setItem('token', response.token);
          console.log('Esperando un breve momento antes de redirigir a Dashboard-Employer');
          setTimeout(() => {
            console.log('Redirigiendo a Dashboard-Employer');
            this.router.navigate(['Dashboard-Employer']);
          }, 100); // Espera 100 milisegundos (ajusta según sea necesario)
        }
      },
      (error) => console.error(`Ha habido un error al hacer login: ${error}`),
      () => console.info('Petición de login terminado')
    );
  }
}
