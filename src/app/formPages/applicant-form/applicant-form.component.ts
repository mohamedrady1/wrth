import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';
import { applicantFormLocal } from './../../local/applicantForm';
import { GlobalService } from 'src/app/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.scss'],
})
export class ApplicantFormComponent {
  lang = this._GlobalService.lang.getValue();
  acceptedFilesMessage = `
    فقط ملف واحد. <br />
    الحد الأقصى 32 ميجا. <br />
    الأنواع المسموح بها : txt, rtf, pdf, doc, docx, odt, ppt, pptx, odp, xls, xlsx, ods.
  `;
  applicantFormLocal = applicantFormLocal;
  isLoading = false;
  selectedImage: File | null;
  createApplicantFrom: FormGroup;
  //createApplicantFrom: FormGroup = new FormGroup({
  //  FullName: new FormControl(null, [Validators.required]),
  //  IdentityNumber: new FormControl(null, [Validators.required]),
  //  Specialization: new FormControl(null, [
  //    Validators.required,
  //    Validators.minLength(8),
  //  ]),
  //  Email: new FormControl(null, [Validators.required, Validators.email]),
  //  PhoneNumber: new FormControl(null, [Validators.required]),
  //  CountryAndCity: new FormControl(null, [Validators.required]),
  //  ExperienceYears: new FormControl(0, [Validators.required]),
  //  CareerPath: new FormControl(null, [Validators.required]),
  //  Notes: new FormControl(null, [Validators.required]),
  //  CVFile: new FormControl(null, [Validators.required]),
  //});

  constructor(
    private _FormsService: FormsService,
    private _GlobalService: GlobalService,
    private _Router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
    this.createApplicantFrom = this.fb.group({
      FullName: ['', Validators.required],
      IdentityNumber: ['', Validators.required],
      Specialization: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', Validators.required],
      CountryAndCity: ['', Validators.required],
      ExperienceYears: [0, [Validators.required, Validators.min(0)]],
      CareerPath: ['', Validators.required],
      Notes: [''],
      CVFile: [null, Validators.required]
    });
  }

  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedImage = inputElement.files[0];
    }
  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.createApplicantFrom.patchValue({
        CVFile: file
      });
      this.createApplicantFrom.get('CVFile').updateValueAndValidity();
    }
  }

  submitCreateApplicantFrom(createApplicantFrom: FormGroup) {
    if (
      !createApplicantFrom.value.FullName ||
      !createApplicantFrom.value.IdentityNumber ||
      !createApplicantFrom.value.Specialization ||
      !createApplicantFrom.value.Email ||
      !createApplicantFrom.value.PhoneNumber ||
      !createApplicantFrom.value.CountryAndCity ||
      !createApplicantFrom.value.ExperienceYears ||
      !createApplicantFrom.value.CareerPath ||
      !createApplicantFrom.value.CVFile
    ) {
      this.toastr.error(
        this.lang === 'ar'
          ? 'الرجاء ادخال الحقول المطلوبة'
          : 'Please insert all required inputs'
      );
      console.log(createApplicantFrom);
    } else {
      this.isLoading = true;

      const formData = new FormData();
      formData.append('FullName', createApplicantFrom.value.FullName);
      formData.append('IdentityNumber', createApplicantFrom.value.IdentityNumber);
      formData.append('Specialization', createApplicantFrom.value.Specialization);
      formData.append('Email', createApplicantFrom.value.Email);
      formData.append('PhoneNumber', createApplicantFrom.value.PhoneNumber);
      formData.append('CountryAndCity', createApplicantFrom.value.CountryAndCity);
      formData.append('ExperienceYears', createApplicantFrom.value.ExperienceYears.toString());
      formData.append('CareerPath', createApplicantFrom.value.CareerPath);
      formData.append('Notes', createApplicantFrom.value.Notes);
      formData.append('CVFile', createApplicantFrom.value.CVFile);

      this._FormsService.createApplicant(formData).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this.toastr.success(
            this.lang === 'ar' ? 'تم التقديم بنجاح' : 'Applied successfully'
          );

          if (res?.message === 'success') {
            this._Router.navigate(['/login']);
          } else {
            // Handle any additional error conditions here
          }
        },
        error: (err: any) => {
          this.isLoading = false;
          this.toastr.error(
            this.lang === 'ar' ? 'فشل التقديم' : 'Application failed'
          );
          console.error('Error:', err); // Log error to see details
        }
      });
    }
  }




  
}
