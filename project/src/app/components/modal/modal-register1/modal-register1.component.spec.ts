import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegister1Component } from './modal-register1.component';

describe('ModalRegister1Component', () => {
  let component: ModalRegister1Component;
  let fixture: ComponentFixture<ModalRegister1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRegister1Component]
    });
    fixture = TestBed.createComponent(ModalRegister1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
