import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class TermsService {
  constructor(private _HttpClient: HttpClient) {}

  getTermsData(): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}TermsAndConditions/term`);
  }
}
