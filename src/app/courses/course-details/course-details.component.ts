import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  @Input() slug = null;
  isLoading = false;

  lang = this._GlobalService.lang.getValue();
  coursesDetails: any = [];

  constructor(
    private _CoursesService: CoursesService,
    private _GlobalService: GlobalService
  ) {}
  
  ngOnInit(): void {
    this.isLoading = true;
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
  
    this._CoursesService.getCourseDetails(this.slug).subscribe({
      next: (res) => {
        this.coursesDetails = res;
        this.isLoading = false;
  
      },
    });
  }

  ngOnChanges(): void {
    this.isLoading = true;
    this._CoursesService.getCourseDetails(this.slug).subscribe({
      next: (res) => {
        this.coursesDetails = res;
        this.isLoading = false;
      },
    });
  }
  isValid(value: any): boolean {
    return value !== null && value !== undefined && value !== '' && !isNaN(value);
  }
  isFutureDate(dateString: string, startTime?: string): boolean {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
  
    currentDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
  
    if (targetDate > currentDate) {
      return true;
    }
  
    if (targetDate.getTime() === currentDate.getTime() && startTime) {
      const currentTime = new Date().getTime();
      const [hours, minutes] = startTime.split(":").map(Number);
      const targetTime = new Date();
      targetTime.setHours(hours, minutes, 0, 0);
  
      return targetTime.getTime() > currentTime;
    }
  
    return false;
  }
  formatTime(time: string): string {
    if (!time) return '';
  
    const [hour, minute] = time.split(':').map(Number);
    const isPM = hour >= 12;
    const adjustedHour = hour % 12 || 12;
  
    const period = isPM ? (this.lang === 'en' ? 'PM' : 'مساءً') : (this.lang === 'en' ? 'AM' : 'صباحًا');
    return `${adjustedHour}:${minute.toString().padStart(2, '0')} ${period}`;
  }
  
}
