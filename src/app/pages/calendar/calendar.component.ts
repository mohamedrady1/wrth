import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { navbarLocal } from '../../local/navbarLocal';
import { academicCalenderService } from 'src/app/services/academicCalender.Service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  lang = this._GlobalService.lang.getValue();
  isLoading = false;

  navbarLocal = navbarLocal;
  academicCalenderData:any;

  constructor(private _GlobalService: GlobalService,private _CalenderService:academicCalenderService) {}

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
    
    this._CalenderService.getAcademicCalenderData().subscribe({
      next: (res) => {
        this.academicCalenderData = res?.[0];
        this.isLoading = false;
      },
    });
  }
}
