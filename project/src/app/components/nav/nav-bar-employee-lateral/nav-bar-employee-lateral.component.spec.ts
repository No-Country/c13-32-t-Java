import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEmployeeLateralComponent } from './nav-bar-employee-lateral.component';

describe('NavBarEmployeeLateralComponent', () => {
  let component: NavBarEmployeeLateralComponent;
  let fixture: ComponentFixture<NavBarEmployeeLateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarEmployeeLateralComponent]
    });
    fixture = TestBed.createComponent(NavBarEmployeeLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
