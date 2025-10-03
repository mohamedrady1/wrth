import { Component, OnInit } from '@angular/core';
import { AboutDetailsService } from '../about-details/about-details.service';
import { GlobalService } from '../../../global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface INavBarList {
  title: string;
  titleAr: string;
  slug: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  contactForm: FormGroup;
  isContactUsRoute: boolean = false;

  constructor(
    private _AboutDetailsService: AboutDetailsService,
    private _GlobalService: GlobalService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactReason: ['اختر', Validators.required],
      subject: ['اختر', Validators.required],
      otherSubject: [''],
      message: ['', Validators.required],
    });
  }

  lang = this._GlobalService.lang.getValue();

  navBarList: INavBarList[] = [];

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
    this._AboutDetailsService.getAboutPage().subscribe({
      next: (response) => {
        this.navBarList = response.navBarList;
      },
    });
    this.route.firstChild?.paramMap.subscribe((params) => {
      this.isContactUsRoute = params.get('name') === 'contactus';
    });
  }

  hasOtherSubject(): boolean {
    return this.contactForm.value.subject === 'Other';
  }

  onSubmit(): void {
    if(this.contactForm.value.contactReason === 'اختر' || this.contactForm.value.subject === 'اختر'){
      this.toastr.error(
        this.lang === 'ar' ? 'من فضلك اختر من القائمة' : 'Please choose an option'
      );
      return;
    }
    if (this.contactForm.valid) {
      this._AboutDetailsService.contactUs(this.contactForm.value).subscribe({
        next: (res: any) => {
          this.toastr.success(
            this.lang === 'ar' ? 'تم الإرسال بنجاح' : 'Sent successfully'
          );
          this.contactForm.reset();
        },
        error: (err: any) => {
          this.toastr.error(this.lang === 'ar' ? 'فشل الإرسال' : 'Sent failed');
        },
      });
    }
  }
}
