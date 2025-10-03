import { Component, Input } from '@angular/core';
import { IEvent } from 'src/app/shared/models/event';
import { EventsService } from '../events.service';
import 'add-to-calendar-button';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent {
  @Input() event?: IEvent;
  isLangChange: boolean = false;
  lang = this._GlobalService.lang.getValue();

  constructor(private eventsService: EventsService,
     private toast: ToastrService,
    private _GlobalService: GlobalService) {}

  ngOnInit() {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.isLangChange = true;
        this.lang = this._GlobalService.lang.getValue();
        setTimeout(() => {
          this.isLangChange = false;
        }, 0);
      },
    });
  }

  addEventToCalender() {
    if (this.isFutureDate(this.event.endDate)) {
      this.eventsService.AddEventToCalendar(this.event);
    }
    else this.eventIsOldToast();
  }
  
  extractDayNumber(dateStr: string): number | null {
    try {
      const dateObj = new Date(dateStr);
      if (isNaN(dateObj.getTime())) {
        return null;
      }
      return dateObj.getDate();
    } catch (error) {
      return null;
    }
  }

  // Function to format the date as "مارس 2023"
  formatDateMonthYear(dateStr: string): string | null {
    try {
      const dateObj = new Date(dateStr);
      if (isNaN(dateObj.getTime())) {
        return null;
      }
      const monthNames = [
        "يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
      ];
      const formattedDate = `${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
      return formattedDate;
    } catch (error) {
      return null;
    }
  }

  // Function to format the time as "5:00 م"
  formatTime(timeStr: string): string | null {
    try {
      const timeObj = new Date(timeStr);
      if (isNaN(timeObj.getTime())) {
        return null;
      }
      const hours = timeObj.getHours();
      const minutes = timeObj.getMinutes();
      const ampm = hours >= 12 ? 'م' : 'ص';
      const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      return formattedTime;
    } catch (error) {
      return null;
    }
  }


  isFutureDate(dateString: string): boolean {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
    return targetDate > currentDate;
  }

  eventIsOldToast() {
    if (!this.isFutureDate(this.event.endDate)) {
      this.toast.warning('عذرًا لا يمكنك التسجيل في هذه الفعالية بعدما انتهت!')
    }
  }

}
