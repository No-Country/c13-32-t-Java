import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPageComponent } from './desktop-page.component';

describe('DesktopPageComponent', () => {
  let component: DesktopPageComponent;
  let fixture: ComponentFixture<DesktopPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopPageComponent]
    });
    fixture = TestBed.createComponent(DesktopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
