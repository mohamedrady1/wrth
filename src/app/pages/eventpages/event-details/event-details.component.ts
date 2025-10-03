import { Component, OnInit } from '@angular/core';
import { EventPrice, IEvent } from 'src/app/shared/models/event';
import { EventsService } from '../events.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/shared/menu.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TermsAndConditionItem } from 'src/app/shared/models/termsAndConditionItem';
import { TermsService } from 'src/app/services/terms.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  menuItems: string[] = [];
  terms: any;
  termsAr: any
  event: IEvent;
  eventPrice: EventPrice[] = [];
  id: any;
  mapUrl: string;
  lang = this._GlobalService.lang.getValue();
  safeMapUrl: SafeResourceUrl; // Declare safeMapUrl property
  isCollapsed: boolean = false;
  isLangChange: boolean = false;


  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private menuService: MenuService,
    private _TermsService: TermsService,
    private sanitizer: DomSanitizer,
    private _GlobalService: GlobalService

  ) { }

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.isLangChange = true;
        this.lang = this._GlobalService.lang.getValue();

        setTimeout(() => {
          this.isLangChange = false;
        }, 0);
      },
    });
    this.loadItems();

    // this.eventsService.getTermsAndConditions().subscribe((res) => {
    //   this.terms = res;
    // });
    this.id = this.route.snapshot?.paramMap.get('id');
    this.eventsService.getEventById(this.id).subscribe(
      (res) => {
        this.event = res;
        this.mapUrl =
          'https://www.google.com/maps/embed/v1/place?q=' +
          this.event.mapLocationUrl +
          '&key=AIzaSyD25W5-Y5QhtwEE7QF278mDFFdEiJAxj_4';
        this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.mapUrl
        );

        //terms
        // this.terms = this.event['terms'];
        
        //termsAr
        // this.termsAr = this.event['termsAr'];

      },
      (error) => {
        console.log(error);
      }
    );

    this.eventsService.getEventPrices(this.id).subscribe((res) => {
      this.eventPrice = res;
    });

    // this._TermsService.getTermsData().subscribe({
    //   next: (res) => {
    //     console.log(res)
    //     this.terms = res;
    //   },
    // })
  }

  loadItems() {
    this.menuService.loadItems().subscribe((res) => {
      this.menuItems = res;
    });
  }

  addEventToCalender() {
    if (this.isFutureDate(this.event.endDate)) {
      this.eventsService.AddEventToCalendar(this.event);
    } else this.eventIsOldToast();
  }

  formatDate(dateStr: string): string | null {
    try {
      const dateObj = new Date(dateStr);
      if (isNaN(dateObj.getTime())) {
        return null;
      }
      const day = dateObj.getDate();
      const monthNames = [
        'يناير',
        'فبراير',
        'مارس',
        'إبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر',
      ];
      const month = monthNames[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      const formattedDate = `${day} ${month} ${year}`;
      return formattedDate;
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
      this.toast.warning('عذرًا لا يمكنك التسجيل في هذه الفعالية بعدما انتهت!');
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  openLinkInNewTab() {
    const url = this.event.extrenelUrl;
    window.open(url, '_blank');
  }
}
