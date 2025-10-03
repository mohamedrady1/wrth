import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _HttpClient: HttpClient) {}

  search(
    query: string = "",
    page: number = 1,
    pageSize: number = 10,
  ): Observable<any> {
    return this._HttpClient.get(
      `${environment.apiUrl}Search/global?Query=${query}&page=${page}&pageSize=${pageSize}`
    );
  }
}
