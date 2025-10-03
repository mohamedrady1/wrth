import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private _HttpClient: HttpClient) {}

  getJobs(
    page: number = 1,
    pageSize: number = 100
  ): Observable<any> {
    return this._HttpClient.get(
      `${environment.apiUrl}JobsPage?page=${page}&pageSize=${pageSize}`
    );
  }
}
