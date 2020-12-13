import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNumberHeaderComponent } from './question-number-header.component';

describe('QuestionNumberHeaderComponent', () => {
  let component: QuestionNumberHeaderComponent;
  let fixture: ComponentFixture<QuestionNumberHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionNumberHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionNumberHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
