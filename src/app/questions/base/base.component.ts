import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {Router} from '@angular/router';
import {StartComponent} from '../start/start.component';
import {FinishComponent} from '../finish/finish.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  //patient: Patient = new Patient();
  patient: Patient = new Patient(55, 0, 1820,0,38,0,270000,1.2,139,0,0);
  component: any = FinishComponent;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {}

  switchComponent(c: any) {
    this.component = c;
    this.cdr.detectChanges();
  }
}
