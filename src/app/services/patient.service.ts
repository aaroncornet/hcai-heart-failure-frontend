import { Injectable } from '@angular/core';
import {Patient} from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patient: Patient;

  constructor() { }

  public setPatient(patient: Patient): void {
    this.patient = patient;
  }

  public getPatient(): Patient {
    return this.patient;
  }
}
