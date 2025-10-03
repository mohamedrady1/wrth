import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorEntryRequestComponent } from './visitor-entry-request/visitor-entry-request.component';

const routes: Routes = [
  {path: "", component: VisitorEntryRequestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
