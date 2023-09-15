import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSuccessfulComponent } from './publication-successful.component';

describe('PublicationSuccessfulComponent', () => {
  let component: PublicationSuccessfulComponent;
  let fixture: ComponentFixture<PublicationSuccessfulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationSuccessfulComponent]
    });
    fixture = TestBed.createComponent(PublicationSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
