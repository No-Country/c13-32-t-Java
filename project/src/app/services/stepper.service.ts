import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  constructor(){}

  private currentStep = 1;

  getCurrentStep(): number {
    return this.currentStep;
  }

  nextStep(): void {
    if (this.currentStep < 3) { // Cambiar 3 por el número total de pasos
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
