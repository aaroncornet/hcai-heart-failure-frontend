import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {QuestionBase} from '../../classes/question-base';
import {Question8Component} from '../question8/question8.component';
import {Question10Component} from '../question10/question10.component';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.component.html',
  styleUrls: ['./question9.component.css']
})
export class Question9Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber = 9;

  toleranceSubject: BehaviorSubject<number>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('serumsodium', new FormControl(null, [Validators.required]));

    this.questionForm.setValue({
      serumsodium: this.patient.serumsodium
    });

    this.toleranceSubject = new BehaviorSubject<number>(this.patient.serumsodium);
    this.onValueChange();
  }

  onValueChange() {
    const value = this.questionForm.value['serumsodium'];
    this.toleranceSubject.next(value);
  }


  saveState(): void {
    const serumsodium = this.questionForm.value['serumsodium'];
    this.patient.serumsodium = serumsodium;
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question8Component);
  }

  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(Question10Component);
  }
}
