import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loadItems() {
    return this.http.get<any[]>(`${this.apiUrl}settings/menus`).pipe(
      map(menus => menus.filter(item => item.isActive).map(item => item.name))
    );
  }

  getLang() {
    return localStorage.getItem('lang')
  }
  setLang(lang: string) {
    localStorage.setItem('lang', lang)
  }

  lang = this.getLang() ? this.getLang() : 'ar';

}
