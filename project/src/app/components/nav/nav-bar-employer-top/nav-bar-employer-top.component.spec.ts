import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEmployerTopComponent } from './nav-bar-employer-top.component';

describe('NavBarEmployerTopComponent', () => {
  let component: NavBarEmployerTopComponent;
  let fixture: ComponentFixture<NavBarEmployerTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarEmployerTopComponent]
    });
    fixture = TestBed.createComponent(NavBarEmployerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
