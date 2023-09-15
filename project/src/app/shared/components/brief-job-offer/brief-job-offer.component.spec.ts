import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefJobOfferComponent } from './brief-job-offer.component';

describe('BriefJobOfferComponent', () => {
  let component: BriefJobOfferComponent;
  let fixture: ComponentFixture<BriefJobOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BriefJobOfferComponent]
    });
    fixture = TestBed.createComponent(BriefJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
