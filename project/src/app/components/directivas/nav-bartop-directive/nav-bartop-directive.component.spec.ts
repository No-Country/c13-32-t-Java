import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBartopDirectiveComponent } from './nav-bartop-directive.component';

describe('NavBartopDirectiveComponent', () => {
  let component: NavBartopDirectiveComponent;
  let fixture: ComponentFixture<NavBartopDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBartopDirectiveComponent]
    });
    fixture = TestBed.createComponent(NavBartopDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
