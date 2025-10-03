import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-media-center',
  templateUrl: './media-center.component.html',
  styleUrls: ['./media-center.component.scss']
})
export class MediaCenterComponent {
  instituteMedia: any = [];
  galleryMedia:any=[];
  newsMedia:any=[];
  page: number = 1;
  lang = this._GlobalService.lang.getValue();
  isLangChange: boolean = false;
  isLoading: boolean = false;
  id: any;

  constructor(private _GlobalService: GlobalService,
    private _MediaService: MediaService) { }

  ngOnInit() {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.isLangChange = true;
        this.lang = this._GlobalService.lang.getValue();
        setTimeout(() => {
          this.isLangChange = false;
        }, 0);
      },
    });
    this.loadMedia();
  }
  
  loadMedia(): void {
    this.isLoading = true;
    this._MediaService.getMediaCenterPage(this.page, 3,1).subscribe({
      next: (response) => {
        this.instituteMedia = response.data;
        this.isLoading = false;
      },
    });
    this._MediaService.getMediaCenterPage(this.page, 5,2).subscribe({
      next: (response) => {
        this.galleryMedia = response.data;
        this.isLoading = false;
      },
    });
    this._MediaService.getMediaCenterPage(this.page, 3,0).subscribe({
      next: (response) => {
        this.newsMedia = response.data;
        this.isLoading = false;
      },
    });
  }
  }
