import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForm1Component } from './register-form1.component';

describe('RegisterForm1Component', () => {
  let component: RegisterForm1Component;
  let fixture: ComponentFixture<RegisterForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterForm1Component]
    });
    fixture = TestBed.createComponent(RegisterForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
