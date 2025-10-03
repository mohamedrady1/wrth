import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrcodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  { path: "", component: QrcodeComponent },
  {path: ":id/:type", component: QrcodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrcodeRoutingModule { }
