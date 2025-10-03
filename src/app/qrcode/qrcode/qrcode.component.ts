import { Component, OnInit } from '@angular/core';
import { IEvent, EventRegistrationQrcode } from 'src/app/shared/models/event';
import { QrcodeService } from '../qrcode.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/shared/menu.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GlobalService } from 'src/app/global.service';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  event: IEvent;
  id: any;
  type: any;
  mapUrl: string;
  safeMapUrl: SafeResourceUrl; // Declare safeMapUrl property
  result: EventRegistrationQrcode = new EventRegistrationQrcode();
  isCollapsed: boolean = false;

  constructor(private qrcodeService: QrcodeService, private route: ActivatedRoute,private _GlobalService : GlobalService
    , private toast: ToastrService, private menuService: MenuService, private sanitizer: DomSanitizer) {
    this.result = new EventRegistrationQrcode();

  }
  lang = this._GlobalService.lang.getValue();



  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next : () => {
        this.lang = this._GlobalService.lang.getValue();
      }
    })
    debugger;
    this.id = this.route.snapshot?.paramMap.get('id');
    this.type = this.route.snapshot?.paramMap.get('type');
    debugger;
    switch (this.type) {
      case "1":
        this.qrcodeService.CheckEventQrcode(this.id).subscribe((res) => {
          console.log("event enter");
          debugger;
          this.result = res;
        });
        break;
      case "2":
        this.qrcodeService.CheckWorkshopQrcode(this.id).subscribe((res) => {
          debugger;
          this.result = res;
        });
        break;
      case "3":
        debugger;
        this.qrcodeService.CheckDiscussionSessionQrcode(parseInt(this.id, 10)).subscribe((res) => {
          debugger;
          this.result = res;
        });
        break;
    }



  }
}
