import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { IEvent } from 'src/app/shared/models/event';
import { ToastrService } from 'ngx-toastr';
import { delay, finalize } from 'rxjs';
import { MenuService } from 'src/app/shared/menu.service';
import { NationalitiesResponse, NationalityItem } from 'src/app/shared/models/nationality';
import { WorkShopItem } from 'src/app/shared/models/workshop';
import { DiscussionSessionItem } from 'src/app/shared/models/discussionSession';
import { AcademicDegreesResponse, AcademicDegreeItem } from 'src/app/shared/models/academicdegrees';
import { Lookup } from 'src/app/shared/models/lookup';
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.scss']
})
export class EventRegisterComponent implements OnInit {

  menuItems: string[] = [];
  selectedWorkShopItems: string[] = [];
  selectedDiscussionSessionItems: string[] = [];

  availableDates: Lookup[] = [];
  selectedDate: Lookup = new Lookup();

  availableAge: Lookup[] = [];
  selectedAge: Lookup = new Lookup();

  nationalityItem: NationalityItem[] = [];
  workshopsItem: WorkShopItem[] = [];
  discussionSessionItem: DiscussionSessionItem[] = [];

  academicDegreesItem: AcademicDegreeItem[] = [];
  selectedNationlity: NationalityItem = new NationalityItem();
  selectedAcademicDegree: AcademicDegreeItem = new AcademicDegreeItem();
  selectedUserType: number;
  flagWorkShop: number = 0;
  flagDiscussionSession: number = 0;
  lang = this._GlobalService.lang.getValue();


  id: number;
  event: IEvent;
  registerEventForm: FormGroup;
  ages = ['10-9', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90']
  gender = [
    {
      number: 0,
      gender: 'اختر الجنس'
    },
    {
      number: 1,
      gender: 'ذكر'
    },
    {
      number: 2,
      gender: 'أنثى'
    }
  ];

  constructor(private eventsService:EventsService, private route:ActivatedRoute,
    private _GlobalService: GlobalService,
    
    private fb: FormBuilder, private router:Router, private toastr: ToastrService, private menuService: MenuService) {
      this.registerEventForm = this.fb.group({
        eventId: [null, Validators.required],
        nationalityId: [null, Validators.required],
        academicDegreeId: [null, Validators.required],
        firstName: ['', Validators.required],
        secondName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone1: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        userType: [0, Validators.required],
        age: [0, Validators.required],
        dateOfAttendance: ['', Validators.required],
        employer: [''],
       // workshopsIds: [this.selectedWorkShopItems.map(value => new Date(value).toISOString())],
      });
    this.selectedUserType = this.gender[0].number;
    
  }

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    })
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.registerEventForm.patchValue({ eventId: this.id });
    });
    this.loadItems();
    this.loadNationlities();
    this.loadAcademicDegrees();
    this.loadAvailableAges();
    this.loadWorkshops();
    this.loadDiscussionSessions();
    
   
    this.loadAvailableDates(+this.id);
    this.eventsService.getEventRelatedById(+this.id).subscribe((res) => {
      this.event = res[0];
    }, (error) => {
      console.log(error);
    })
  }

  loadItems() {
    this.menuService.loadItems().subscribe((res) => {
      this.menuItems = res
    })
    
  }

  loadWorkshops() {
    this.eventsService.getAvailableWorkshops(this.id).subscribe((res) => {
      this.workshopsItem = res;
    });
  }

  loadDiscussionSessions() {
    this.eventsService.getAvailableDiscussionSessions(this.id).subscribe((res) => {
      this.discussionSessionItem = res;
    });
  }
  
  loadNationlities() {
    this.eventsService.getAllNationalities().subscribe((res) => {
      var temp = new NationalityItem()
      temp.id = 0;
      temp.nameAr = "اختر الجنسية";
      this.nationalityItem.push(temp);
      this.nationalityItem = this.nationalityItem.concat(res);
      this.selectedNationlity.id = this.nationalityItem[0].id;
    });
  }

  changeselectedNationlity(event) {
    debugger;
    var obj = this.nationalityItem.find(x => x.id == event.target.value);
    this.selectedNationlity.id = obj.id;
    this.fcError('nationalityId');
  }

  // load academic degrees

  loadAcademicDegrees() {
    this.eventsService.getAllAcademicDegrees().subscribe((res) => {
      var temp = new AcademicDegreeItem()
      temp.id = 0;
      temp.nameAr = "اختر الدرجة العلمية";
      this.academicDegreesItem.push(temp);
      this.academicDegreesItem = this.academicDegreesItem.concat(res);
      this.selectedAcademicDegree.id = this.academicDegreesItem[0].id;
    });
  }

  changeSelectedAcademicDegree(event) {
    debugger;
    var obj = this.academicDegreesItem.find(x => x.id == event.target.value);
    this.selectedAcademicDegree.id = event.target.value;
    this.fcError('academicDegreeId');
  }

  // load available dates
  loadAvailableDates(id: number) {
    this.eventsService.getAvailableDates(id).subscribe((res) => {
      // this.availableDates = this.availableDates.concat(res);
      var temp = new Lookup()
       temp.id = 0;
       temp.title = "تاريخ حضور الفعالية";
      this.availableDates.push(temp);
      res.forEach((currentValue, index) => {
        var obj = new Lookup();
        obj.id = index + 1;
        obj.title = currentValue;

        this.availableDates.push(obj);
        this.selectedDate.id = this.availableDates[0].id;
        this.selectedDate.title = this.availableDates[0].title;
      });
    });
  }

  changeSelectedAvailableDate(event) {
    var obj = this.availableDates.find(x => x.title == event.target.value);
    this.selectedDate.id = obj.id;
    this.fcError('dateOfAttendance');
  }
  // load available ages
  loadAvailableAges() {

    var temp = new Lookup()
    temp.id = 0;
    temp.title = "اختر العمر";
    this.availableAge.push(temp);

    this.ages.forEach((currentValue, index) => {
      var obj = new Lookup();
      obj.id = index + 1;
      obj.title = currentValue;
      this.availableAge.push(obj);

      this.selectedAge.id = this.availableAge[0].id;
      this.selectedAge.title = this.availableAge[0].title;
    });
  }

  changeSelectedAvailableAge(event) {
    var obj = this.availableAge.find(x => x.title == event.target.value);
    this.selectedAge.id = obj.id;
    this.fcError('age');
  }


  showRegisterBtnLoader = false;
  registerEvent() {
    if (this.selectedDate.id == 0) {
      this.toastr.error('اختر تاريخ حضور الفعالية');
    }
    else if (this.selectedNationlity.id == 0) {
      this.toastr.error('اختر الجنسية');
    }
    else if (this.selectedAge.id == 0) {
      this.toastr.error('اختر العمر');
    }
    else if (this.selectedAcademicDegree.id == 0) {
      this.toastr.error('اختر الدرجة العلمية');
    }
    else if (this.registerEventForm.valid) {
      this.showRegisterBtnLoader = true;
      debugger;
      this.registerEventForm.value.workshopsIds = this.selectedWorkShopItems.map(value => value.toString());
      this.registerEventForm.value.discussionIds = this.selectedDiscussionSessionItems.map(value => value.toString());
      this.eventsService.registerEvent(this.registerEventForm.value)
        .pipe(
          delay(500),
          finalize(() => this.showRegisterBtnLoader = false)
        )
        .subscribe(
          (res) => {
            this.toastr.success('تم التسجيل في الفعالية بنجاح!');
            this.router.navigateByUrl('/');
          },
          (err) => {
            if(err.error.statusCode == 500) {
              this.toastr.success('تم التسجيل في الفعالية بنجاح!');
              this.router.navigateByUrl('/');
            }
            else {
              this.toastr.error('حدث خطأ ما، برجاء إعادة المحاولة.');
            }
          }
        );
    }
  }

  fcError(formControlName): number {
    if ((formControlName == 'dateOfAttendance' && this.selectedDate.id == 0) ||
      (formControlName == 'nationalityId' && this.selectedNationlity.id == 0) ||
      (formControlName == 'userType' && this.selectedUserType == 0) ||
      (formControlName == 'academicDegreeId' && this.selectedAcademicDegree.id == 0) ||
      (formControlName == 'age' && this.selectedAge.id == 0)
    ) {
      return 2
    };
    if(this.registerEventForm.get(formControlName).touched
    && !this.registerEventForm.get(formControlName).errors) return 1;
    else if(this.registerEventForm.get(formControlName).touched
    && this.registerEventForm.get(formControlName).errors) return 2;
    return 3;
  }

  workShopType(e) {
    debugger;
    this.flagWorkShop = e.target.value;
  }
  changeWorkShop(e,e1) {
    debugger;
    var obj = this.selectedWorkShopItems.find(x=>x ==e1.id);

    this.flagWorkShop = e.target.checked;
    if (e.target.checked == true && (obj==null ||obj == undefined))
      this.selectedWorkShopItems.push(e1.id);
    else
      this.selectedWorkShopItems = this.selectedWorkShopItems.filter(item => item !== e1.id);
    debugger;
  }

  discussionSessionType(e) {
    debugger;
    this.flagDiscussionSession = e.target.value;
  }
  changeDiscussionSession(e, e1) {
    debugger;
    var obj = this.selectedDiscussionSessionItems.find(x => x == e1.id);

    this.flagDiscussionSession = e.target.checked;
    if (e.target.checked == true && (obj == null || obj == undefined))
      this.selectedDiscussionSessionItems.push(e1.id);
    else
      this.selectedDiscussionSessionItems = this.selectedDiscussionSessionItems.filter(item => item !== e1.id);
    debugger;
  }
}
