import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor(private _HttpClient: HttpClient) {}

  //createApplicant(applicantData: object): Observable<any> {
  //  return this._HttpClient.post(
  //    `${environment.apiUrl}Applicant/create`,
  //    applicantData
  //  );
  //}

  createApplicant(formData: FormData): Observable<any> {
    return this._HttpClient.post(`${environment.apiUrl}Applicant/create`, formData);
  }

}
