import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-training-courses',
  templateUrl: './training-courses.component.html',
  styleUrls: ['./training-courses.component.scss'],
})
export class TrainingCoursesComponent implements OnInit, OnChanges {
  @Input() slug = null;
  selectedTap = 'available';
  isLoading = false;
  lang = this._GlobalService.lang.getValue();
  allCourses: any = [];
  coursesList: any = [];

  changeSelectedTap(name: string) {
    this.selectedTap = name;
    this.fetchProgramCourses();
  }

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
    this.fetchProgramCourses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = true;
    this.fetchProgramCourses();
  }

  fetchProgramCourses() {
    // if (this.selectedTap === 'available') {
    //   this._CoursesService.getProgramCourses('2', this.slug).subscribe({
    //     next: (res) => {
    //       this.coursesList = res?.data;
    //       this.isLoading = false;
    //     },
    //   });
    // } else {
    //   this._CoursesService.getProgramCourses('1', this.slug).subscribe({
    //     next: (res) => {
    //       this.allCourses = res?.data;
    //       this.isLoading = false;
    //     },
    //   });
    // }
      this._CoursesService.getProgramCourses('1', this.slug).subscribe({
        next: (res) => {
          this.allCourses = res?.data; 
          console.log(res?.data);

          this.allCourses = this.allCourses.filter((course: any) => {
            return course.isCoursePublished === true;
          });

          console.log(this.allCourses);

          this.coursesList = this.allCourses.filter((course: any) => { 
            return course.isCourseOpen === true && course.isCoursePublished === true; 
          });
          console.log( this.coursesList);
          this.isLoading = false;
        },
      });
  }

}
