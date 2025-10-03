import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { ProgramService } from 'src/app/services/program.service';
import { INavBarList } from '../../aboutPages/about/about.component';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss'],
})
export class ProgramDetailsComponent {
  aboutArr: any = [];
  pageContent: any = {};
  isLoading = false;
  name: string | null = null;
  navBarList: INavBarList[] = [];
  isProgramDetailsRoot: boolean = false;
  allNavLinks:any;
  lastSegment: string = '';

  lang = this._GlobalService.lang.getValue();

  constructor(
    private _ProgramService: ProgramService,
    private _GlobalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private _HomeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
        
      },
    });
    
    this._HomeService.getHomeData().subscribe({
      next: (res) => {
        
        this.allNavLinks = res;   
        this.activatedRoute.url.subscribe((url) => {
          this.lastSegment = url[url.length - 1]?.path || '';        
          const matchSlugWithNavLinks = (category: any) =>
            this.allNavLinks?.[category]?.some((page: any) => page.slug === this.lastSegment);
        
          const categories = ['leaderPages', 'communicationPages', 'educationPrograms'];
        
          for (const category of categories) {
            if (matchSlugWithNavLinks(category)) {
              this.navBarList = this.allNavLinks[category];
              break;
            }
          }
        });
        
  },
    });

    this._ProgramService.getEducationProgramPage().subscribe({
      next: (response) => {
        // this.navBarList = response.navBarList;
    this.isLoading = true;

        this.aboutArr = response.educationProgramPages;
        this.pageContent = response.educationProgramPages.find(
          (ele) => ele.slug == this.name
        );
        this.isLoading=false
    }
    });

    this.route?.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.pageContent = this.aboutArr.find((ele) => ele.slug == this.name);

    });

    this.router.events.subscribe(() => {
      this.isProgramDetailsRoot = !this.route.firstChild;
    });
  }

  getCurrentProgramTitle() {
    const currentProgram = this.navBarList.find(
      (item) => item.slug === this.name
    );
    return currentProgram
      ? this.lang === 'ar'
        ? currentProgram.titleAr
        : currentProgram.title
      : '';
  }
}
