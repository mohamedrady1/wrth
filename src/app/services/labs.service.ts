import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class LabsService {
  constructor(private _HttpClient: HttpClient) {}

  getLab(id: number = 6): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}Laboratories/${id}`);
  }
  addLabRegisteration(data: any): Observable<any> {
    return this._HttpClient.post(`${environment.apiUrl}LaboratoryRegistrations`, data);
  }
}
