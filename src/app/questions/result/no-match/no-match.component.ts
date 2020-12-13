import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';

@Component({
  selector: 'app-no-match',
  templateUrl: './no-match.component.html',
  styleUrls: ['./no-match.component.css']
})
export class NoMatchComponent implements OnInit {

  @Input('patient') patient: Patient;
  constructor() { }

  ngOnInit(): void {
  }

}
