import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class BussinessService {
  constructor(private _HttpClient: HttpClient) {}

  addBussinessRegisteration(data: any): Observable<any> {
    return this._HttpClient.post(
      `${environment.apiUrl}BusinessIncubatorRegistration`,
      data
    );
  }
}
