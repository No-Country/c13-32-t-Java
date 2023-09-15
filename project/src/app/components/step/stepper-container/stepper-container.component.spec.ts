import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperContainerComponent } from './stepper-container.component';

describe('StepperContainerComponent', () => {
  let component: StepperContainerComponent;
  let fixture: ComponentFixture<StepperContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperContainerComponent]
    });
    fixture = TestBed.createComponent(StepperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
