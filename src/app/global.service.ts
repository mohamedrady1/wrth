import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  lang : any = new BehaviorSubject(this.getLang() ? this.getLang() : 'ar');

  constructor() { }

  getLang() {
    return localStorage.getItem('lang')
  }
  setLang(lang: string) {
    localStorage.setItem('lang', lang)
  }

  // getLang() {
  //   return localStorage.getItem('lang')
  // }
  // setLang(lang: string) {
  //   localStorage.setItem('lang', lang)
  // }

  // lang = this.getLang() ? this.getLang() : 'ar';
}
