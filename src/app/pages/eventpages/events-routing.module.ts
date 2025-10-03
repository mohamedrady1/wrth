import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventQrcodeComponent } from './event-qrcode/event-qrcode.component';

const routes: Routes = [
  { path: '', component: EventsListComponent },
  { path: ':id/Register', component: EventRegisterComponent },
  { path: ':id/Details', component: EventDetailsComponent },
  { path: ':id/:type/Qrcode', component: EventQrcodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
