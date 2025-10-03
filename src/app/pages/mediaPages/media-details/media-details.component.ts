import { Component, ElementRef, HostListener, Inject, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ImgErrorDirective } from 'src/app/directives/img-error.directive';
import { GlobalService } from 'src/app/global.service';
import { DataService } from 'src/app/services/data.service';
import { MediaService } from 'src/app/services/media.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
})
export class MediaDetailsComponent {
  allMedia: any[] = [];
  mediaArr: any[] = [];
  sidebarList: any[] = [];
  navbarLocal: any[] = [];
  pageContent: any = {};
  heading: any = {};
  contentHtml: string = '';

  page: number;
  pageSize: number;
  imgSrc: string = 'assets/images/item.jpg'
  currentImg: number = 0;

  pageUrl:string;

  isLoading: boolean = false;
  isLangChange: boolean = false;

  imageError: boolean = false;


  groups = [
    { en: "Articles about traditional arts", ar: "مقالات عن الفنون التقليدية" , id:0},
    { en: "Articles about news", ar: "مقالات عن الأخبار" , id:1},
    { en: "Articles about events", ar: "مقالات عن الفعاليات", id:2}
  ];
  images = ['assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg', 'assets/images/item.jpg']

  lang = this._GlobalService.lang.getValue();
  @Input() name = '';
  @Input() slug = '';

  constructor(
    private _MediaService: MediaService,
    private _GlobalService: GlobalService,
    private router: Router,
    private ac: ActivatedRoute,
    private pageData: DataService,
    @Inject(PLATFORM_ID) private platformId: Object) {
      if (isPlatformBrowser(this.platformId)) {
        this.pageUrl = window.location.href; 
      }
    }

  ngOnInit(): void {
    // this.page = this.pageData.getData1()
    this.pageSize = this.pageData.getData2()
    this.isLoading = true;
    this.isLangChange = true;
    this._GlobalService.lang.subscribe({
      next: () => {
        this.isLangChange = true;
        this.lang = this._GlobalService.lang.getValue();
        setTimeout(() => {
          this.isLangChange = false;
        }, 0);
      },
    });
      this.getItemDetails(this.slug);
      this._MediaService.getMediaCenterPage(1, 4, this._MediaService.typeName.findIndex(type => type === this.ac.snapshot?.paramMap.get('name')))
        .subscribe({
          next: (response) => {
            if(this.name=='photo-gallery'){
            this.mediaArr = response.data
            .filter(item => item.slug !== "traditionalbookbinding")
            .slice(0, 3);
            }
            else{
              this.mediaArr = response.data.slice(0, 3);
            }
            this.isLoading = false;
          },
        });
    this.heading = this._MediaService.navBarList;
  }

  ngOnChanges() {
    // imageSlider
    //  this.pageContent['galleries']=this.images;
    if(this.name=='photo-gallery'){
    this.pageContent = this.allMedia.find((ele) => ele.slug == this.slug);
  }

  }
getItemDetails(slug){
  this._MediaService.getMediaCenterDetails(slug)
  .subscribe({
    next: (response) => {
      this.pageContent =response;
     this.isLoading = false;

    }})
  }
  get mediaType() {
    let type = this._MediaService.typeName[this.heading.findIndex(item => item.type === this.ac.snapshot?.paramMap.get('name'))];
    const typeList = this._MediaService.navBarList.find(ele => ele.slug == type)
    return typeList;
  }
  openPopup(socialLink:string): void {
    if (isPlatformBrowser(this.platformId)) {
    const url = socialLink + encodeURIComponent(this.pageUrl);
    window.open(url, 'popup', 'width=600,height=400');
    }
  }

  handleError() {
    this.imageError = true;
  }
}
