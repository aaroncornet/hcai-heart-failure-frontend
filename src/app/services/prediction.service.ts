import { Injectable } from '@angular/core';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../models/Patient';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  private prediction$ = new Subject<number>();
  private isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public getPrediction(patient: Patient) {
    this.isLoading$.next(true);
    return this.http.post(`${environment.apiUrl}/api/prediction`, {
      age: patient.age,
      anaemia: patient.anaemia,
      creatininephosphokinase: patient.creatininephosphokinase,
      diabetes: patient.diabetes,
      ejectionfraction: patient.ejectionfraction,
      highbloodpressure: patient.highbloodpressure,
      platelets: patient.platelets,
      serumcreatinine: patient.serumcreatinine,
      serumsodium: patient.serumsodium,
      sex: patient.sex,
      smoking: patient.smoking
    });
  }
}
