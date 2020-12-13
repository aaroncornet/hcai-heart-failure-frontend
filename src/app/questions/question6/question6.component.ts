import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Question5Component} from '../question5/question5.component';
import {QuestionBase} from '../../classes/question-base';
import {Question7Component} from '../question7/question7.component';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.css']
})
export class Question6Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber: number = 6;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('highbloodpressure', new FormControl(null, [Validators.required]));

    let highbloodpressure: string;
    if(this.patient.highbloodpressure) {
      highbloodpressure = '1';
    }
    else {
      highbloodpressure = '0';
    }
    this.questionForm.setValue({
      highbloodpressure: highbloodpressure
    });
  }

  saveState(): void {
    const highbloodpressure = this.questionForm.value['highbloodpressure'];
    if(highbloodpressure === '1') {
      this.patient.highbloodpressure = 1;
    } else {
      this.patient.highbloodpressure = 0;
    }
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question5Component);
  }
  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(Question7Component);
  }
}
