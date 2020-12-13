import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient} from '../../models/Patient';
import {Router} from '@angular/router';
import {Question1Component} from '../../questions/question1/question1.component';
import {Question2Component} from '../question2/question2.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  @Input('patient') patient: Patient;
  @Output() questionEvent = new EventEmitter();

  ngOnInit(): void {
  }

  start(): void {
    this.questionEvent.emit(Question1Component);
  }



}
