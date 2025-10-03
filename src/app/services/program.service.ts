import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  navBarList = [
    {
      title: 'Continuing Education (Short Courses)',
      titleAr: 'برامج التعليم المستمر',
      slug: 'continuingeducation',
    },
    {
      title: 'Apprenticeship',
      titleAr: 'برامج التلمذة',
      slug: 'apprenticeship',
    },
    {
      title: 'Community Programs',
      titleAr: 'برامج مجتمعية',
      slug: 'communityprograms',
    },
    {
      title: 'Entrepreneurship and Incubation Programs',
      titleAr: 'برامج ريادة الأعمال والاحتضان',
      slug: 'entrepreneurshipandincubationprograms',
    },
    {
      title: 'Traditional Building Arts Diploma Program',
      titleAr: 'البرامج الأكاديمية',
      slug: 'traditionalbuildingartsdiplomaprogram',
    },
  ];

  getEducationProgramPage(): Observable<any> {
    return this._HttpClient.get(
      `${environment.apiUrl}EducationProgramPage/education`
    );
  }

  constructor(private _HttpClient: HttpClient) {}
}
