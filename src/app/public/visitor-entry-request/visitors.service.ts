import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  requestVisit(data) {
    return this.http.post<any>(this.apiUrl + 'InstituteVisitors', data);
  }

  getAllNations() {
    return this.http.get<any>('assets/countries.json');
  }
}
