import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishEmployeeComponent } from './publish-employee.component';

describe('PublishEmployeeComponent', () => {
  let component: PublishEmployeeComponent;
  let fixture: ComponentFixture<PublishEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublishEmployeeComponent]
    });
    fixture = TestBed.createComponent(PublishEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
