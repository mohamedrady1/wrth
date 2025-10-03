import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  navBarList = [
    {
      title: 'News',
      titleAr: 'الأخبار',
      slug: 'news',
      type:'news',
      other:'Latest news',
      otherAr:'آخر الأخبار'

    },
    {
      title: 'Blog',
      titleAr: 'المدونة',
      slug: 'institute-blogs',
      type:'institute-blogs',
      other:'Latest Blogs',
      otherAr:'آخر مدونات'

    },
    {
      title: 'Photo Gallery',
      titleAr: 'مكتبة الصور',
      slug: 'photo-gallery',
      type:'photo-gallery',
      other:'Other albums',
      otherAr:'البومات أخرى'
    },
  ];
  termsList=[
    { title: "Articles about traditional arts", titleAr: "مقالات عن الفنون التقليدية", id:0},
    { title: "Articles about news", titleAr: "مقالات عن الأخبار" , id:1},
    { title: "Articles about events", titleAr: "مقالات عن الفعاليات" , id:2},
    { title: "Traditional arts", titleAr: "الفنون التقليدية", id:7}
  ];
  typeName = ['news', 'institute-blogs', 'photo-gallery'];

  getMediaCenterPage(page: number = 1, pageSize: number=9 , type: number = 0): Observable<any> {
    return this._HttpClient.get(
      `${environment.apiUrl}MediaCenterPage?page=${page}&pageSize=${pageSize}&type=${type}`
    );
  }
  getMediaBlogCategorate(id:number): Observable<any>{
    return this._HttpClient.get(
      `${environment.apiUrl}MediaCenterPage/${id}/articles`
    );
  }
  getMediaCenterDetails(slug:string): Observable<any> {
    return this._HttpClient.get(
      `${environment.apiUrl}MediaCenterPage/${slug}/mediaCenterSlug`
    );
  }


  constructor(private _HttpClient: HttpClient) {}
}
