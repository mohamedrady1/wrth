import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FixedNavbarLinksComponent } from './navbar/fixed-navbar-links/fixed-navbar-links.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarMobileComponent } from './navbar/navbar-mobile/navbar-mobile.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FixedNavbarLinksComponent,
    NavbarMobileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 600000,
      // positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
