import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { VisitorsService } from './visitors.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { delay, finalize } from 'rxjs';
import { MenuService } from 'src/app/shared/menu.service';

@Component({
  selector: 'app-visitor-entry-request',
  templateUrl: './visitor-entry-request.component.html',
  styleUrls: ['./visitor-entry-request.component.scss']
})
export class VisitorEntryRequestComponent implements OnInit{

  menuItems: string[] = [];

  visitorForm: FormGroup;
  selectedImage: File | null;
  selectedImageUrl: string = '';
  nations: string[] = [];

  constructor(private formBuilder: FormBuilder, private visitorsService: VisitorsService
  , private toastr: ToastrService, private router: Router, private menuService: MenuService) {
    this.visitorForm = this.formBuilder.group({
      VisitDestination: ['', Validators.required],
      VisitReasons: ['', Validators.required],
      BeneficiaryAdministration: ['', Validators.required],
      VisitDateTimeFrom: ['', Validators.required],
      VisitDateTimeTo: ['', Validators.required],
      EmployeeName: ['', Validators.required],
      VisitLocation: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', Validators.required],
      VisitDate: ['', Validators.required],
      FullName: ['', Validators.required],
      IdentityNumber: ['', Validators.required],
      Nationality: ['', Validators.required],
      IdentityPhotoFile: ['', Validators.required],
      HasVehicle: [false, Validators.required],
      DriverFullName: [''],
      DriverIdentityNumber: [''],
      DriverNationality: [''],
      VehicleType: [''],
      PlateNumber: [''],
    }, { validator: this.timeOrderValidator });

    this.visitorForm.get('HasVehicle')?.valueChanges.subscribe(hasVehicle => {
      const driverFields = ['DriverFullName', 'DriverIdentityNumber', 'DriverNationality', 'VehicleType', 'PlateNumber'];
      driverFields.forEach(field => {
        const control = this.visitorForm.get(field);
        if (hasVehicle) {
          control?.setValidators([Validators.required]);
        } else {
          control?.clearValidators();
        }
        control?.updateValueAndValidity();
      });
    });
  }

  ngOnInit() {
    this.loadItems();

    this.visitorsService.getAllNations().subscribe((nations: any[]) => {
      this.nations = nations.map(nation => nation.name);
    });
  }

  loadItems() {
    this.menuService.loadItems().subscribe((res) => {
      this.menuItems = res
    })
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedImage = file;

    this.selectedImageUrl = URL.createObjectURL(file);

    this.visitorForm.patchValue({ PhotoFile: file });
  }

  removeSelected() {
    this.selectedImage = null;
    this.selectedImageUrl = '';
  }

  showRegisterBtnLoader = false;

  onSubmit() {
    if (this.visitorForm.valid) {
      let formData = new FormData();

      formData.append('FullName', this.visitorForm.get('FullName').value);
      formData.append('IdentityNumber', this.visitorForm.get('IdentityNumber').value);
      formData.append('Nationality', this.visitorForm.get('Nationality').value);
      formData.append('VisitDestination', this.visitorForm.get('VisitDestination').value);
      formData.append('VisitReasons', this.visitorForm.get('VisitReasons').value);
      formData.append('BeneficiaryAdministration', this.visitorForm.get('BeneficiaryAdministration').value);
      formData.append('VisitDateTimeFrom', this.visitorForm.get('VisitDateTimeFrom').value);
      formData.append('VisitDateTimeTo', this.visitorForm.get('VisitDateTimeTo').value);
      formData.append('EmployeeName', this.visitorForm.get('EmployeeName').value);
      formData.append('VisitLocation', this.visitorForm.get('VisitLocation').value);
      formData.append('Email', this.visitorForm.get('Email').value);
      formData.append('PhoneNumber', this.visitorForm.get('PhoneNumber').value);
      console.log(this.visitorForm.get('VisitDate').value);
      const visitDate = new Date(this.visitorForm.get('VisitDate').value);
      console.log(visitDate)
      formData.append('VisitDate', visitDate.toISOString());
      formData.append('HasVehicle', this.visitorForm.get('HasVehicle').value);
      formData.append('DriverFullName', this.visitorForm.get('DriverFullName').value);
      formData.append('DriverIdentityNumber', this.visitorForm.get('DriverIdentityNumber').value);
      formData.append('DriverNationality', this.visitorForm.get('DriverNationality').value);
      formData.append('VehicleType', this.visitorForm.get('VehicleType').value);
      formData.append('PlateNumber', this.visitorForm.get('PlateNumber').value);

      if (this.selectedImage) {
        formData.append('IdentityPhotoFile', this.selectedImage);
      }

      this.showRegisterBtnLoader = true;
      this.visitorsService.requestVisit(formData)
        .pipe(
          delay(500),
          finalize(() => this.showRegisterBtnLoader = false)
        )
        .subscribe(
          (res) => {
            this.toastr.success('تم إرسال طلبك بنجاح!');
            this.router.navigateByUrl('/');
          },
          (err) => {
            if (err.error.statusCode == 500) {
              this.toastr.success('تم إرسال طلبك بنجاح!');
              this.router.navigateByUrl('/');
            } else {
              this.toastr.error('حدث خطأ ما، برجاء إعادة المحاولة.');
            }
          }
        );
    }
    else console.log(this.visitorForm.errors);
  }

  fcError(formControlName): number {
    if(this.visitorForm.get(formControlName).touched
    && !this.visitorForm.get(formControlName).errors) return 1;
    else if(this.visitorForm.get(formControlName).touched
    && this.visitorForm.get(formControlName).errors) return 2;
    return 3;
  }

  timeOrderValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const fromTime = control.get('VisitDateTimeFrom')?.value;
    const toTime = control.get('VisitDateTimeTo')?.value;
    if (fromTime && toTime && fromTime > toTime) {
      return { 'timeOrderInvalid': true };
    }
    return null;
  }

}
