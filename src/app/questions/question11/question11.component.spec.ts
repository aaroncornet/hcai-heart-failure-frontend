import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question11Component } from './question11.component';

describe('Question11Component', () => {
  let component: Question11Component;
  let fixture: ComponentFixture<Question11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
