import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { LabsService } from 'src/app/services/labs.service';

@Component({
  selector: 'app-labs-register',
  templateUrl: './labs-register.component.html',
  styleUrls: ['./labs-register.component.scss'],
})
export class LabsRegisterComponent {
  myForm: FormGroup;
  selectedFile: File | null = null;
  lab: any = {};
  labTimes: any = [];
  lang = this._GlobalService.lang.getValue();


  constructor(
    private fb: FormBuilder,
    private labsService: LabsService,
    private route: ActivatedRoute,
    private _GlobalService: GlobalService
  ) {
    this.myForm = this.fb.group({
      laboratoryId: [0, Validators.required],
      date: [''],
      fromDate: [''],
      toDate: [''],
      time: [''],
      applicantName: [''],
      phoneNumber: [''],
      email: [''],
      socialMediaAccount: [''],
      doYouBelongToPrivateOrGovernmentalAgency: [false],
      privateOrGovernmentalOrPrivateAgencyNameYouBelongTo: [''],
      doYouHaveSubscriptionToAnyCharity: [false],
      charityName: [''],
      labSpaceReason: [''],
      projectDescription: [''],
      photoFile: [null],
      isProjectBelongToPrivateOrGovernmentalAgency: [false],
      privateOrGovernmentalAgencyProjectBelongTo: [''],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot?.paramMap.get('labId');
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },})
    this.labsService.getLab(Number(id)).subscribe({
      next: (res) => {
        this.lab = res[0];
      },
    });
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    const newThis = this;
    reader.onloadend = function () {
      const base64String = (reader.result as any)
        .replace('data:', '')
        .replace(/^.+,/, '');
      newThis.myForm.patchValue({
        file: base64String,
      });
    };
  }

  getTimesBasedOnSelectedDate() {
    const selectedDateValue = this.myForm.get('date')?.value;
    console.log("SASA ~ LabsRegisterComponent ~ getTimesBasedOnSelectedDate ~ selectedDateValue:", selectedDateValue)
    const selectedDate = this.lab?.laboratoryDates?.find(
      (item) => item.date === selectedDateValue
    );
    this.labTimes = selectedDate?.laboratoryTimes || [];
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = new FormData();

      Object.keys(this.myForm.controls).forEach((key) => {
        if (key !== 'photoFile') {
          formData.append(key, this.myForm.get(key).value);
        }
        if (key === 'doYouBelongToPrivateOrGovernmentalAgency') {
          const v = this.myForm.get(key).value === '1';
          formData.set(key, v as any);
        }
        if (key === 'doYouHaveSubscriptionToAnyCharity') {
          const v = this.myForm.get(key).value === '1';
          formData.set(key, v as any);
        }
        if (key === 'isProjectBelongToPrivateOrGovernmentalAgency') {
          const v = this.myForm.get(key).value === '1';
          formData.set(key, v as any);
        }
      });

      const fileInput = this.myForm.get('photoFile').value;
      if (fileInput) {
        formData.append('photoFile', fileInput);
      }

      formData.set('laboratoryId', this.lab.id);

      this.labsService.addLabRegisteration(formData).subscribe({});
    } else {
      console.log('Form is not valid');
    }
  }
}
