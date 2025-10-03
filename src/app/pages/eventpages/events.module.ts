import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsListComponent } from './events-list/events-list.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventQrcodeComponent } from './event-qrcode/event-qrcode.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    EventsListComponent,
    EventItemComponent,
    EventRegisterComponent,
    EventDetailsComponent,
    EventQrcodeComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    SharedModule,
  ],
  providers: [ToastrService],
})
export class EventsModule {}
