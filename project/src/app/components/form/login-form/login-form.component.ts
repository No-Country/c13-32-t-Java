import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importa Validators
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginError = false;
  loginForm: FormGroup = new FormGroup({});

  @Output() loginAction: EventEmitter<any> = new EventEmitter<any>();

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Cambia el nombre del método a submitLoginForm
  submitLoginForm() {
    if (this.loginForm.touched) { // Verifica si el formulario se ha tocado
      this.loginAction.emit(this.loginForm.value);
    }
  }

  onSubmit() {
    const { email, password } = this.loginForm.value; // Obtén valores del formulario
    this.submitLoginForm(); // Call the submitLoginForm function

    this.authService.login(email, password).subscribe(
      (response) => {
        const authToken = response.token; // Supongamos que el servidor devuelve un token
        localStorage.setItem('token', authToken);
        // Redirige al usuario a la página de inicio
        // Puedes usar la función de enrutamiento de Angular para hacer esto.
        // Por ejemplo, si tienes una ruta llamada '/home':
        // this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error de inicio de sesión:', error);
        this.loginError = true;
      }
    );
  }
}
