import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionBase} from '../../classes/question-base';
import {Question10Component} from '../question10/question10.component';
import {FinishComponent} from '../finish/finish.component';

@Component({
  selector: 'app-question11',
  templateUrl: './question11.component.html',
  styleUrls: ['./question11.component.css']
})
export class Question11Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber: number = 11;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('smoking', new FormControl(null, [Validators.required]));

    let smoking: string;
    if(this.patient.smoking) {
      smoking = '1';
    }
    else {
      smoking = '0';
    }
    this.questionForm.setValue({
      smoking: smoking
    });
  }

  saveState(): void {
    const smoking = this.questionForm.value['smoking'];
    if(smoking === '1') {
      this.patient.smoking = 1;
    } else {
      this.patient.smoking = 0;
    }
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question10Component);
  }
  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(FinishComponent);
  }
}
