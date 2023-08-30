import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotFoundPagesComponent } from './bot-found-pages.component';

describe('BotFoundPagesComponent', () => {
  let component: BotFoundPagesComponent;
  let fixture: ComponentFixture<BotFoundPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotFoundPagesComponent]
    });
    fixture = TestBed.createComponent(BotFoundPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
