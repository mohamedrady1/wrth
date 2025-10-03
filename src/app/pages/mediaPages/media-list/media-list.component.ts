import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { MediaService } from 'src/app/services/media.service';
import { DataService } from 'src/app/services/data.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss'],
})
export class MediaListComponent {
  media: any = [];
  totalCount: number = 0;
  page: number = 1;
  pageSize: number = 9;
  totalPages: number = 0;
  isLoading: boolean = false;
  lang = this._GlobalService.lang.getValue();
  type: number = 0;
  isLangChange: boolean = false;
  heading: any = {};

  @Input() name = '';

  constructor(
    private _MediaService: MediaService,
    private _GlobalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private pageData: DataService,
    @Inject(PLATFORM_ID) private platformId: any) {  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.page = 1;
    });
    this.route?.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.type =
        params.get('name') === 'news'
          ? 0
          : params.get('name') === 'institute-blogs'
            ? 1
            : 2;
    });
    this.isLoading = true;

    this._GlobalService.lang.subscribe({
      next: () => {
        this.isLangChange = true;
        this.lang = this._GlobalService.lang.getValue();
        setTimeout(() => {
          this.isLangChange = false;
        }, 0);
      },
    });
    this.heading = this._MediaService.navBarList.find(
      (item) => item.slug == this.name
    );
  }

  ngOnChanges() {
    this.heading = this._MediaService.navBarList.find(
      (item) => item.slug == this.name
    );
    setTimeout(() => {
      this.loadMedia()

    }, 0);
  }
  
  loadMedia(): void {
    this.isLoading = true;
    if(this.type==2){
      this.pageSize=14;
    }
    if(this.type==0||this.type==1){
      this.pageSize=9;
    }

    this._MediaService.getMediaCenterPage(this.page, this.pageSize, this.type).subscribe({
      next: (response) => {
        this.media = response.data;
        this.isLoading = false;
        this.totalCount = response?.totalCount || 0;
        this.page = response?.page || 0;
        this.pageSize = response?.pageSize || 0;
        this.totalPages = response?.pageCount || 0;

      },
    });
  }

  goToPage(newPage: number): void {
    this.page = newPage;
    
    this.loadMedia();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 270,
        behavior: 'smooth',
      });
    }
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
