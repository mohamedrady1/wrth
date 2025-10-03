import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  sharedData1: number;
  sharedData2: number;

  constructor() {
    this.sharedData1 = 1;
    this.sharedData2 = 9;
  }

  setData1(data: number) {
    this.sharedData1= data;
  }

  getData1(): number {
    return this.sharedData1;
  }
  setData2(data: number) {
    this.sharedData2= data;
  }

  getData2(): number {
    return this.sharedData2;
  }
}
