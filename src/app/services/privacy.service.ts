import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class PrivacyService {
  getPrivacyData(): Observable<any> {
    return this._HttpClient.get(
      `${environment.apiUrl}PrivacyAndUsagePolicyPage`
    );
  }

  constructor(private _HttpClient: HttpClient) {}
}
