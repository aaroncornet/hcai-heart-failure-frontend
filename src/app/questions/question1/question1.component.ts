import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question2Component} from '../question2/question2.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionBase} from '../../classes/question-base';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component extends QuestionBase implements OnInit  {

  questionForm: FormGroup;
  questionNumber = 1;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('age', new FormControl(null, [Validators.required]));

    this.questionForm.setValue({
      age: this.patient.age
    });
}

  onSubmit(): void {
    this.patient.age = this.questionForm.value['age'];
    this.questionEvent.emit(Question2Component);
  }

}
