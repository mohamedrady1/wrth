import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  jobs = [];
  activeTab: string = 'all-jobs';
  lang = this._GlobalService.lang.getValue();

  constructor(private jobsService: JobsService,
    private _GlobalService: GlobalService

  ) {}
  

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },})
    this.jobsService.getJobs().subscribe({
      next: (res) => {
        this.jobs = res.data;
      },
    });
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }
}
