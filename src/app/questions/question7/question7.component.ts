import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {QuestionBase} from '../../classes/question-base';
import {Question8Component} from '../question8/question8.component';
import {Question6Component} from '../question6/question6.component';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.css']
})
export class Question7Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber = 7;

  toleranceSubject: BehaviorSubject<number>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('platelets', new FormControl(null, [Validators.required]));

    this.questionForm.setValue({
      platelets: this.patient.platelets
    });

    this.toleranceSubject = new BehaviorSubject<number>(this.patient.platelets);
    this.onValueChange();
  }

  onValueChange() {
    const value = this.questionForm.value['platelets'];
    this.toleranceSubject.next(value);
  }


  saveState(): void {
    this.patient.platelets = this.questionForm.value['platelets'];
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question6Component);
  }
  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(Question8Component);
  }
}
