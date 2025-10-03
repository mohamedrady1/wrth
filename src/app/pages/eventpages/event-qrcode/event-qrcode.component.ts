import { Component, OnInit } from '@angular/core';
import { IEvent, EventRegistrationQrcode } from 'src/app/shared/models/event';
import { EventsService } from '../events.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/shared/menu.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GlobalService } from 'src/app/global.service';


@Component({
  selector: 'app-event-qrcode',
  templateUrl: './event-qrcode.component.html',
  styleUrls: ['./event-qrcode.component.scss']
})
export class EventQrcodeComponent implements OnInit {

  event: IEvent;
  id: any;
  type: any;
  mapUrl: string;
  safeMapUrl: SafeResourceUrl; // Declare safeMapUrl property
  result: EventRegistrationQrcode = new EventRegistrationQrcode();
  isCollapsed: boolean = false;
  lang = this._GlobalService.lang.getValue();


  constructor(private eventsService: EventsService, private route: ActivatedRoute,
    private _GlobalService: GlobalService, private toast: ToastrService, private menuService: MenuService, private sanitizer: DomSanitizer) {
    this.result = new EventRegistrationQrcode();

  }

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
    this.id = this.route.snapshot?.paramMap.get('id');
    this.type = this.route.snapshot?.paramMap.get('type');
    this.type = 1;
    debugger;
    switch (this.type) {
      case 1:
        this.eventsService.CheckEventQrcode(this.id).subscribe((res) => {
          debugger;
          this.result = res;
        });
        break;
      case 2:
        this.eventsService.CheckWorkshopQrcode(this.id).subscribe((res) => {
          debugger;
          this.result = res;
        });
        break;
      case 3:
        this.eventsService.CheckDiscussionSessionQrcode(this.id).subscribe((res) => {
          debugger;
          this.result = res;
        });
        break;
    }



  }
}
