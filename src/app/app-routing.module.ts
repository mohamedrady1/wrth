import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/aboutPages/about/about.component';
import { AboutDetailsComponent } from './pages/aboutPages/about-details/about-details.component';
import { DarkNavLayoutComponent } from './layout/navbar/mode-layout/dark-nav-layout/dark-nav-layout.component';
import { ProgramsComponent } from './pages/programPage/programs/programs.component';
import { ProgramDetailsComponent } from './pages/programPage/program-details/program-details.component';
import { MediaComponent } from './pages/mediaPages/media/media.component';
import { MediaDetailsComponent } from './pages/mediaPages/media-details/media-details.component';
import { MediaListComponent } from './pages/mediaPages/media-list/media-list.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ApplicantFormComponent } from './formPages/applicant-form/applicant-form.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { SearchComponent } from './pages/search/search.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { BussinessRegisterComponent } from './pages/bussiness-register/bussiness-register.component';
import { LabsRegisterComponent } from './pages/labs-register/labs-register.component';
import { TermComponent } from './pages/taxonomy/term/term.component';
import { MediaCenterComponent } from './pages/mediaPages/media-center/media-center.component';
import { BasicTermsComponent } from './pages/basic-terms/basic-terms.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    component: DarkNavLayoutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
        children: [
          {
            path: ':name',
            component: AboutDetailsComponent,
          },
        ],
      },
      {
        path: 'media-center', 
        component:MediaCenterComponent 
      },
      {
        path: 'media',
        component: MediaComponent,
        children: [
          {
            path: ':name',
            component: MediaListComponent,
          },
          {
            path: ':name/:slug',
            component: MediaDetailsComponent,
          },
        ],
      },
      {
        path: 'program',
        component: ProgramsComponent,
        children: [
          {
            path: ':name',
            component: ProgramDetailsComponent,
            children: [
              {
                path: ':slug',
                component: CourseDetailsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'bussiness-applicants',
        component: BussinessRegisterComponent,
      },
      {
        path: 'labs-applicants/:labId',
        component: LabsRegisterComponent,
      },
      {
        path: 'apply-job',
        component: ApplicantFormComponent,
      },
      {
        path: 'royal-institute-calendar',
        component: CalendarComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
      {
        path: 'faqs',
        component: FaqComponent,
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
      },
      {
        path: 'terms',
        component: TermsComponent,
      },
      {
        path: 'basic-terms',
        component: BasicTermsComponent,
      },
      {
        path: 'taxonomy/term/:id',
        component:TermComponent
      },
      {
        path: 'Events',
        loadChildren: () =>
          import('./pages/eventpages/events.module').then(
            (m) => m.EventsModule
          ),
      },
      {
        path: 'Qrcode',
        loadChildren: () =>
          import('./qrcode/qrcode.module').then((m) => m.QrcodeModule),
      },
      {
        path: 'VisitorEntryRequest',
        loadChildren: () =>
          import('./public/public.module').then((m) => m.PublicModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      bindToComponentInputs: true,
      scrollPositionRestoration: 'enabled'

    }),
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
