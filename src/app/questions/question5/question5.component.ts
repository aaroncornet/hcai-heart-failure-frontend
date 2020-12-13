import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {Question4Component} from '../question4/question4.component';
import {QuestionBase} from '../../classes/question-base';
import {Question6Component} from '../question6/question6.component';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component extends QuestionBase implements OnInit {

  questionForm: FormGroup;
  questionNumber = 5;

  toleranceSubject: BehaviorSubject<number>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('ejectionfraction', new FormControl(null, [Validators.required]));

    this.questionForm.setValue({
      ejectionfraction: this.patient.ejectionfraction
    });

    this.toleranceSubject = new BehaviorSubject<number>(this.patient.ejectionfraction);
    this.onValueChange();
  }

  onValueChange() {
    const value = this.questionForm.value['ejectionfraction'];
    this.toleranceSubject.next(value);
  }


  saveState(): void {
    this.patient.ejectionfraction = this.questionForm.value['ejectionfraction'];
  }

  onSubmit(): void {
    this.saveState();
    this.questionEvent.emit(Question6Component);
  }

  previous(): void {
    this.saveState();
    this.questionEvent.emit(Question4Component);
  }
}
