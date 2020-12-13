import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Question2Component} from '../question2/question2.component';
import {QuestionBase} from '../../classes/question-base';
import {BehaviorSubject} from 'rxjs';
import {Question4Component} from '../question4/question4.component';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber = 3;

  toleranceSubject: BehaviorSubject<number>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('creatininephosphokinase', new FormControl(null, [Validators.required]));

    this.questionForm.setValue({
      creatininephosphokinase: this.patient.creatininephosphokinase
    });

    this.toleranceSubject = new BehaviorSubject<number>(this.patient.creatininephosphokinase);
    this.onValueChange();
  }

  onValueChange() {
    const value = this.questionForm.value['creatininephosphokinase'];
    this.toleranceSubject.next(value);
  }


  saveState(): void {
    this.patient.creatininephosphokinase = this.questionForm.value['creatininephosphokinase'];
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question2Component);
  }

  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(Question4Component);
  }
}
