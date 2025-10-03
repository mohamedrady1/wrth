import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/environment';
import {
  EventsResponse,
  IEvent,
  EventRegistrationQrcode,
  EventPrice,
} from '../../shared/models/event';
import {
  NationalitiesResponse,
  NationalityItem,
} from '../../shared/models/nationality';
import {
  AcademicDegreesResponse,
  AcademicDegreeItem,
} from '../../shared/models/academicdegrees';
import { WorkShopItem } from '../../shared/models/workshop';
import { TermsAndConditionItem } from '../../shared/models/termsAndConditionItem';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get<IEvent[]>(this.apiUrl + 'Events/nopagination');
  }
  getTermsAndConditions() {
    return this.http.get<TermsAndConditionItem>(
      this.apiUrl + 'TermsAndConditions/term'
    );
  }
  getEventById(id: number) {
    return this.http.get<IEvent>(this.apiUrl + `events/${id}`);
  }

  getEventRelatedById(id: number) {
    return this.http.get<IEvent>(this.apiUrl + `events/related/${id}`);
  }

  registerEvent(data: any) {
    return this.http.post<any>(
      this.apiUrl + 'EventRegistrations/register',
      data
    );
  }

  AddEventToCalendar(event: IEvent) {
    const eventDetails = {
      title: event.titleAr,
      description: event.detailsAr,
      location: event.locationAr,
      startDate: event.startDate,
      endDate: event.endDate,
    };

    this.downloadICSFile(eventDetails, `${event.titleEn}.ics`);
  }

  downloadICSFile(eventDetails: any, filename: string) {
    const icsData = this.generateICSFile(eventDetails);

    // Create a Blob containing the ICS data
    const blob = new Blob([icsData], { type: 'text/calendar' });

    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;

    // Simulate a click event to open the file
    a.click();

    // Clean up the anchor element
    window.URL.revokeObjectURL(a.href);
  }

  generateICSFile(eventDetails: any): string {
    const { title, description, location, startDate, endDate } = eventDetails;

    const icsData = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//My Calendar//EN
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${startDate}
DTEND:${endDate}
END:VEVENT
END:VCALENDAR
    `;

    return icsData;
  }

  getAllNationalities() {
    return this.http.get<NationalityItem[]>(
      this.apiUrl + 'Nationalities/nopagination'
    );
  }
  getAllAcademicDegrees() {
    return this.http.get<AcademicDegreeItem[]>(
      this.apiUrl + 'AcademicDegrees/nopagination'
    );
  }

  getAvailableDates(id: number) {
    return this.http.get<string[]>(this.apiUrl + `events/availabledates/${id}`);
  }

  getAvailableWorkshops(id: number) {
    return this.http.get<WorkShopItem[]>(
      this.apiUrl + `WorkShops/${id}/availableWorkshops`
    );
  }

  getAvailableDiscussionSessions(id: number) {
    return this.http.get<WorkShopItem[]>(
      this.apiUrl + `DiscussionSessions/${id}/availableDiscussionSessions`
    );
  }

  CheckEventQrcode(id: number) {
    debugger;
    return this.http.get<EventRegistrationQrcode>(
      this.apiUrl + `EventRegistrations/${id}/qrcode`
    );
  }

  CheckWorkshopQrcode(id: number) {
    debugger;
    return this.http.get<EventRegistrationQrcode>(
      this.apiUrl + `WorkShopRegistrations/${id}/qrcode`
    );
  }

  CheckDiscussionSessionQrcode(id: number) {
    debugger;
    return this.http.get<EventRegistrationQrcode>(
      this.apiUrl + `DiscussionSessionRegistrations/${id}/qrcode`
    );
  }

  getEventPrices(id: number) {
    return this.http.get<EventPrice[]>(this.apiUrl + `events/${id}/prices`);
  }
}
