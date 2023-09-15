import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterOferComponent } from './form-register-ofer.component';

describe('FormRegisterOferComponent', () => {
  let component: FormRegisterOferComponent;
  let fixture: ComponentFixture<FormRegisterOferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegisterOferComponent]
    });
    fixture = TestBed.createComponent(FormRegisterOferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
