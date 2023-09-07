import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulatesComponent } from './postulates.component';

describe('PostulatesComponent', () => {
  let component: PostulatesComponent;
  let fixture: ComponentFixture<PostulatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostulatesComponent]
    });
    fixture = TestBed.createComponent(PostulatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
