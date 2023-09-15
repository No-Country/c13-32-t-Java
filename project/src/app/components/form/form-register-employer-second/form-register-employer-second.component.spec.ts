import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterEmployerSecondComponent } from './form-register-employer-second.component';

describe('FormRegisterEmployerSecondComponent', () => {
  let component: FormRegisterEmployerSecondComponent;
  let fixture: ComponentFixture<FormRegisterEmployerSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegisterEmployerSecondComponent]
    });
    fixture = TestBed.createComponent(FormRegisterEmployerSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
