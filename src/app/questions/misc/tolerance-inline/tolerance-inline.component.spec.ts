import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToleranceInlineComponent } from './tolerance-inline.component';

describe('ToleranceInlineComponent', () => {
  let component: ToleranceInlineComponent;
  let fixture: ComponentFixture<ToleranceInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToleranceInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToleranceInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
