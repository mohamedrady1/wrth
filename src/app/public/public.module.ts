import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorEntryRequestComponent } from './visitor-entry-request/visitor-entry-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PhoneMaskDirective } from '../shared/phonemask.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VisitorEntryRequestComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    SharedModule
  ],
  providers: [ToastrService]
})
export class PublicModule { }
