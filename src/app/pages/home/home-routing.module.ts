import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LightNavLayoutComponent } from '../../layout/navbar/mode-layout/light-nav-layout/light-nav-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LightNavLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        // redirectTo: "/",
        pathMatch: 'full',
      },
      {
        path: 'home',
        redirectTo: '/',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
