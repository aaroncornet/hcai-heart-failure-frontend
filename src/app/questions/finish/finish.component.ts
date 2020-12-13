import { Component, OnInit } from '@angular/core';
import {QuestionBase} from '../../classes/question-base';
import {ResultComponent} from '../result/result.component';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent extends QuestionBase implements OnInit {

  anaemia = false;
  diabetes = 'No';
  highbloodpressure = 'No';
  sex = 'Female';
  smoking = 'No';

  constructor(private patientService: PatientService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    if (this.patient.anaemia === 1) {
      this.anaemia = true;
    }
    if (this.patient.diabetes === 1) {
      this.diabetes = 'Yes';
    }
    if (this.patient.highbloodpressure === 1) {
      this.highbloodpressure = 'Yes';
    }
    if (this.patient.smoking === 1) {
      this.smoking = 'Yes';
    }
    if (this.patient.sex === 1) {
      this.sex = 'Male';
    }
  }

  finish(): void {
    this.patientService.setPatient(this.patient);
    this.router.navigate(['/result']);
  }
}
