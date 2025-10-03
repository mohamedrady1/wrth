import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrcodeComponent } from './qrcode/qrcode.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { QrcodeRoutingModule } from './qrcode-routing.module';

@NgModule({
  declarations: [
    QrcodeComponent
  ],
  imports: [
    CommonModule,
    QrcodeRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    SharedModule
  ],
  providers: [ToastrService]
})
export class QrcodeModule { }
