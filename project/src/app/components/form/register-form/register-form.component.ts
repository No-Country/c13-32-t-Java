import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
//  Importamos lo necesario para construir el formulario
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{
  registerForm: FormGroup = new FormGroup({});
  @Output() registerAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private formBuilder: FormBuilder,private stepperService: StepperService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });

  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  // Submit del formulario de Login
  submitRegister(){

    if(this.registerForm.valid){
      // console.table(this.loginForm.value);
      this.registerAction.emit(this.registerForm.value);
      // this.loginForm.reset();
    }
  }

}
