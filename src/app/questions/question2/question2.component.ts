import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient} from '../../models/Patient';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Question1Component} from '../question1/question1.component';
import {Question3Component} from '../question3/question3.component';
import {QuestionBase} from '../../classes/question-base';


@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber: number = 2;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('anaemia', new FormControl(null, [Validators.required]));

    let anaemia: string;
    if(this.patient.anaemia) {
      anaemia = '1';
    }
    else {
      anaemia = '0';
    }
    this.questionForm.setValue({
      anaemia: anaemia
    });
  }

  saveState(): void {
    const anaemia = this.questionForm.value['anaemia'];
    if(anaemia === '1') {
      this.patient.anaemia = 1;
    } else {
      this.patient.anaemia = 0;
    }
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question1Component);
  }

  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(Question3Component);
  }
}
