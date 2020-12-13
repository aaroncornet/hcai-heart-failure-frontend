import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Patient} from '../models/Patient';

@Component({
  template: ''
})
export abstract class QuestionBase {
  @Input('patient') patient: Patient;
  @Output() questionEvent = new EventEmitter();
}
