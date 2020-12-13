import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionBase} from '../../classes/question-base';
import {Question9Component} from '../question9/question9.component';
import {Question11Component} from '../question11/question11.component';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrls: ['./question10.component.css']
})
export class Question10Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber: number = 10;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('sex', new FormControl(null, [Validators.required]));

    let sex: string;
    if(this.patient.sex) {
      sex = '1';
    }
    else {
      sex = '0';
    }
    this.questionForm.setValue({
      sex: sex
    });
  }

  saveState(): void {
    const sex = this.questionForm.value['sex'];
    if(sex === '1') {
      this.patient.sex = 1;
    } else {
      this.patient.sex = 0;
    }
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question9Component);
  }
  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(Question11Component);
  }
}
