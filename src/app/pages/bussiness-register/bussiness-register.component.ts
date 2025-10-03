import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BussinessService } from 'src/app/services/bussiness.service';

@Component({
  selector: 'app-bussiness-register',
  templateUrl: './bussiness-register.component.html',
  styleUrls: ['./bussiness-register.component.scss'],
})
export class BussinessRegisterComponent {
  myForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private bussinessService: BussinessService
  ) {
    this.myForm = this.fb.group({
      firstName: [''],
      secondName: [''],
      familyName: [''],
      birthDate: [''],
      idNumber: [''],
      gender: null,
      district: null,
      city: [''],
      email: [''],
      phoneNumber: 0,
      workTitle: [''],
      projectIdea: [''],
      traditionalArt: null,
      doYouHaveTeam: [false],
      yourAdvantageOverOtherApplicants: [''],
      haveYourProductDeveloped: [false],
      doYouHavefullTimeToParticipateInTheIncubatorProgram: [false],
      haveYouJoinedAcceleratorOrIncubatorProgram: [false],
      acceleratorOrIncubatorName: [''],
      doYoHaveTakenTrainingCourseInTheInstitute: [false],
      trainingCourseName: [''],
      yourWebsite: [''],
      yourProjectTwitter: [''],
      yourProjectInstagram: [''],
      photoFile: null,
      businessIncubatorProgram: [1],
    });
  }

  ngOnInit(): void {}

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.myForm.patchValue({
        file: this.selectedFile,
      });
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = new FormData();

      Object.keys(this.myForm.controls).forEach((key) => {
        if (key !== 'photoFile') {
          formData.append(key, this.myForm.get(key).value);
        }
        if (key === 'doYouHaveTeam') {
          const v = this.myForm.get(key).value === '1';
          formData.set(key, v as any);
        }
        if (key === 'haveYourProductDeveloped') {
          const v = this.myForm.get(key).value === '1';
          formData.set(key, v as any);
        }
        if (key === 'doYouHavefullTimeToParticipateInTheIncubatorProgram') {
          const v = this.myForm.get(key).value === '1';
          formData.set(key, v as any);
        }
        if (key === 'haveYouJoinedAcceleratorOrIncubatorProgram') {
          const v = this.myForm.get(key).value === '1';
          formData.set(key, v as any);
        }
        if (key === 'doYoHaveTakenTrainingCourseInTheInstitute') {
          const v = this.myForm.get(key).value === '1';
          formData.set(key, v as any);
        }
      });

      const fileInput = this.myForm.get('photoFile').value;
      if (fileInput) {
        formData.append('photoFile', fileInput);
      }

      this.bussinessService.addBussinessRegisteration(formData).subscribe({});
    } else {
      console.log('Form is not valid');
    }
  }
}
