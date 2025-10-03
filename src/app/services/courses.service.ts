import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private _HttpClient: HttpClient) {}

  getProgramCourses(type: string, slug: string): Observable<any> {
    return this._HttpClient.get(
      `${environment.apiUrl}TrainingCourses?type=${type}&slug=${slug}`
    );
  }
  getCourseDetails(slug: string): Observable<any> {
    return this._HttpClient.get(
      `${environment.apiUrl}TrainingCourses/${slug}/slug`
    );
  }
}
