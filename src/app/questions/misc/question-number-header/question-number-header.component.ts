import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-number-header',
  templateUrl: './question-number-header.component.html',
  styleUrls: ['./question-number-header.component.css']
})
export class QuestionNumberHeaderComponent implements OnInit {

  @Input('number') questionNumber: number;
  @Input('max') maxQuestions: number = 11;
  @Input('offset') offset: number = 1;
  progressValue: number;
  constructor() { }

  ngOnInit(): void {
    this.progressValue = (this.questionNumber / (this.maxQuestions + this.offset)) * 100;
  }

}
