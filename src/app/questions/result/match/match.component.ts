import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input('patient') patient: Patient;
  constructor() { }

  ngOnInit(): void {
  }

}
