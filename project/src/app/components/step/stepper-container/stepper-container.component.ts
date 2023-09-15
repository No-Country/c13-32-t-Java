import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.css']
})
export class StepperContainerComponent implements OnInit{
  constructor(private stepperService: StepperService) {}
  mostrarComponente = false;
  mostrarComponente2 = false;
  mostrarComponente3 = false;
  

  ngOnInit(): void {
    
  }

  getCurrentStep(): number {
    if (this.stepperService.getCurrentStep() ===1) {
      this.mostrarComponente = true;
      this.mostrarComponente2 = false;
      this.mostrarComponente3 = false;
    } else if(this.stepperService.getCurrentStep() ===2){
      this.mostrarComponente = false;
      this.mostrarComponente2 = true;
      this.mostrarComponente3 = false;
    }else{
      this.mostrarComponente = false;
      this.mostrarComponente2 = false;
      this.mostrarComponente3 = true;
      
    }
    return this.stepperService.getCurrentStep();
  }

  nextStep(): void {
    
    this.stepperService.nextStep();
  }
  
  prevStep(): void {
    
    this.stepperService.prevStep();
  }
  
}
