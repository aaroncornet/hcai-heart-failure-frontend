import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {QuestionBase} from '../../classes/question-base';
import {Question7Component} from '../question7/question7.component';
import {Question9Component} from '../question9/question9.component';

@Component({
  selector: 'app-question8',
  templateUrl: './question8.component.html',
  styleUrls: ['./question8.component.css']
})
export class Question8Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber = 8;

  toleranceSubject: BehaviorSubject<number>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('serumcreatinine', new FormControl(null, [Validators.required]));

    this.questionForm.setValue({
      serumcreatinine: this.patient.serumcreatinine
    });

    this.toleranceSubject = new BehaviorSubject<number>(this.patient.serumcreatinine);
    this.onValueChange();
  }

  onValueChange() {
    const value = this.questionForm.value['serumcreatinine'];
    this.toleranceSubject.next(value);
  }


  saveState(): void {
    this.patient.serumcreatinine = this.questionForm.value['serumcreatinine'];
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question7Component);
  }

  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(Question9Component);
  }
}
