import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/environment';
import { EventsResponse, IEvent, EventRegistrationQrcode, EventPrice } from '../shared/models/event';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

 
  CheckEventQrcode(id: number) {
    debugger;
    return this.http.get<EventRegistrationQrcode>(this.apiUrl + `EventRegistrations/${id}/qrcode`);
  }

  CheckWorkshopQrcode(id: number) {
    debugger;
    return this.http.get<EventRegistrationQrcode>(this.apiUrl + `WorkShopRegistrations/${id}/qrcode`);
  }

  CheckDiscussionSessionQrcode(id: number) {
    debugger;
    return this.http.get<EventRegistrationQrcode>(this.apiUrl + `DiscussionSessionRegistrations/${id}/qrcode`);
  }

}
