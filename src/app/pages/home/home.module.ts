import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LightNavLayoutComponent } from '../../layout/navbar/mode-layout/light-nav-layout/light-nav-layout.component';
import { CoreModule } from 'src/app/layout/core.module';

@NgModule({
  declarations: [LightNavLayoutComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule],
})
export class HomeModule {}
