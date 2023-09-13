import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEmployerLateralComponent } from './nav-bar-employer-lateral.component';

describe('NavBarEmployerLateralComponent', () => {
  let component: NavBarEmployerLateralComponent;
  let fixture: ComponentFixture<NavBarEmployerLateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarEmployerLateralComponent]
    });
    fixture = TestBed.createComponent(NavBarEmployerLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
