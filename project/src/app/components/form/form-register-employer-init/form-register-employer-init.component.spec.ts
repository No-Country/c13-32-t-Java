import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterEmployerInitComponent } from './form-register-employer-init.component';

describe('FormRegisterEmployerInitComponent', () => {
  let component: FormRegisterEmployerInitComponent;
  let fixture: ComponentFixture<FormRegisterEmployerInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegisterEmployerInitComponent]
    });
    fixture = TestBed.createComponent(FormRegisterEmployerInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
