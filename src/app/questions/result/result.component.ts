import { Component, OnInit } from '@angular/core';
import {PredictionService} from '../../services/prediction.service';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  patient: Patient;
  isLoading = true;
  errorMessage = undefined;
  predictionResult;

  constructor(private predictionService: PredictionService, private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patient = this.patientService.getPatient();
    this.getPrediction();
  }

  getPrediction() {
    if (this.patient !== undefined) {
      this.predictionService.getPrediction(this.patient).subscribe(
        (data) => {
          this.predictionResult = data;
          this.isLoading = false;
          this.patientService.setPatient(undefined);
        }
      );
    } else {
      this.errorMessage = 'No data found to make prediction on';
      this.isLoading = false;
    }
  }
}
