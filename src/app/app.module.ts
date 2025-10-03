import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/aboutPages/about/about.component';
import { AboutDetailsComponent } from './pages/aboutPages/about-details/about-details.component';
import { DarkNavLayoutComponent } from './layout/navbar/mode-layout/dark-nav-layout/dark-nav-layout.component';
import { ProgramsComponent } from './pages/programPage/programs/programs.component';
import { ProgramDetailsComponent } from './pages/programPage/program-details/program-details.component';
import { MediaComponent } from './pages/mediaPages/media/media.component';
import { MediaDetailsComponent } from './pages/mediaPages/media-details/media-details.component';
import { MediaListComponent } from './pages/mediaPages/media-list/media-list.component';
import { LoadingComponent } from './ui/loading/loading.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AccordionComponent } from './ui/accordion/accordion.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CoreModule } from './layout/core.module';
import { InputComponent } from './ui/forms/input/input.component';
import { FileInputComponent } from './ui/forms/file-input/file-input.component';
import { ApplicantFormComponent } from './formPages/applicant-form/applicant-form.component';
import { ButtonComponent } from './ui/button/button.component';
import { TextareaComponent } from './ui/forms/textarea/textarea.component';
import { CardComponent } from './ui/card/card.component';
import { TrainingCoursesComponent } from './courses/training-courses/training-courses.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { SearchComponent } from './pages/search/search.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { BussinessRegisterComponent } from './pages/bussiness-register/bussiness-register.component';
import { LabsRegisterComponent } from './pages/labs-register/labs-register.component';
import { BlogCardComponent } from './ui/blog-card/blog-card.component';
import { NewsCardComponent } from './ui/news-card/news-card.component';
import { SideBarComponent } from './ui/side-bar/side-bar.component';
import { ImgErrorDirective } from './directives/img-error.directive';
import { GallaryCardComponent } from './ui/gallary-card/gallary-card.component';
import { DisableScrollDirective } from './directives/disable-scroll.directive';
import { PhotoGallaryListComponent } from './ui/photo-gallary-list/photo-gallary-list.component';
import { PhotoGalleryComponent } from './pages/mediaPages/details-components/photo-gallery/photo-gallery.component';
import { TabsComponent } from './pages/aboutPages/components/tabs/tabs.component';
import { ManagementCardsComponent } from './pages/aboutPages/components/management-cards/management-cards.component';
import { LazyLoadImgDirective } from './directives/lazy-load-img.directive';
import { InstituteServicesComponent } from './pages/aboutPages/components/institute-services/institute-services.component';
import { WrthGoalsComponent } from './pages/aboutPages/components/wrth-goals/wrth-goals.component';
import { ContactUsComponent } from './pages/aboutPages/components/contact-us/contact-us.component';
import { TermComponent } from './pages/taxonomy/term/term.component';
import { MediaCenterComponent } from './pages/mediaPages/media-center/media-center.component';
import { BasicTermsComponent } from './pages/basic-terms/basic-terms.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AboutDetailsComponent,
    DarkNavLayoutComponent,
    ProgramsComponent,
    ProgramDetailsComponent,
    MediaComponent,
    MediaDetailsComponent,
    MediaListComponent,
    LoadingComponent,
    FaqComponent,
    AccordionComponent,
    PrivacyComponent,
    CalendarComponent,
    TermsComponent,
    InputComponent,
    FileInputComponent,
    ApplicantFormComponent,
    ButtonComponent,
    TextareaComponent,
    TrainingCoursesComponent,
    CardComponent,
    CourseDetailsComponent,
    SearchComponent,
    JobsComponent,
    BussinessRegisterComponent,
    LabsRegisterComponent,
    NewsCardComponent,
    SideBarComponent,
    GallaryCardComponent,
    DisableScrollDirective,
    PhotoGallaryListComponent,
    PhotoGalleryComponent,
    TabsComponent,
    ManagementCardsComponent,
    WrthGoalsComponent,
    ContactUsComponent,
    TermComponent,
    MediaCenterComponent,
    BasicTermsComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BlogCardComponent,
    ImgErrorDirective,
    LazyLoadImgDirective,
    InstituteServicesComponent

],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
