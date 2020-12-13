import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Question3Component} from '../question3/question3.component';
import {QuestionBase} from '../../classes/question-base';
import {Question5Component} from '../question5/question5.component';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber: number = 4;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('diabetes', new FormControl(null, [Validators.required]));

    let diabetes: string;
    if(this.patient.diabetes) {
      diabetes = '1';
    }
    else {
      diabetes = '0';
    }
    this.questionForm.setValue({
      diabetes: diabetes
    });
  }

  saveState(): void {
    const diabetes = this.questionForm.value['diabetes'];
    if(diabetes === '1') {
      this.patient.diabetes = 1;
    } else {
      this.patient.diabetes = 0;
    }
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question3Component);
  }

  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(Question5Component);
  }
}
