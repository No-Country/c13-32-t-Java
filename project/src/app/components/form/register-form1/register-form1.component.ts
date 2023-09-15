import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-register-form1',
  templateUrl: './register-form1.component.html',
  styleUrls: ['./register-form1.component.css']
})
export class RegisterForm1Component implements OnInit{
  
    registerForm: FormGroup = new FormGroup({});
    @Output() registerAction: EventEmitter<{}> = new EventEmitter<{}>();
  
    constructor(private formBuilder: FormBuilder) { }
  
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
  
