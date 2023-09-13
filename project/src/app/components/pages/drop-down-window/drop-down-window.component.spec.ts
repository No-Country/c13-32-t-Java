import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownWindowComponent } from './drop-down-window.component';

describe('DropDownWindowComponent', () => {
  let component: DropDownWindowComponent;
  let fixture: ComponentFixture<DropDownWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownWindowComponent]
    });
    fixture = TestBed.createComponent(DropDownWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
