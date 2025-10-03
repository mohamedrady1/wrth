import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Input, ViewChild } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent {
  @Input() lang: string;
  @Input() pageContent: any;

  showButtons = true;

  @ViewChild('imageSlider') imageSlider: ElementRef;
  @ViewChild('img') img!: ElementRef;
  @ViewChild('photogallery') photogallery!: ElementRef;
  @ViewChild('photogalleryContainer') photogalleryContainer!: ElementRef;
  @ViewChild('sliderContainer') sliderContainer: ElementRef;

  currentIndex: number = 0;
  private isLocked: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  changeImage(i) {
    if (isPlatformBrowser(this.platformId)) {
      let photoSlider = this.photogallery.nativeElement;
      let photoWidth = this.photogalleryContainer.nativeElement.clientWidth;

      let container = this.imageSlider.nativeElement;
      let imgWidth = this.img.nativeElement.clientWidth;
      let reverseDirection = this.lang === 'ar';

      let directionMultiplier = reverseDirection ? -1 : 1;
      
      if (i > this.currentIndex) {
        photoSlider.scrollLeft += directionMultiplier * (i - this.currentIndex) * photoWidth;
        container.scrollLeft += directionMultiplier * (i - this.currentIndex) * imgWidth;
      } else {
        photoSlider.scrollLeft -= directionMultiplier * (this.currentIndex - i) * photoWidth;
        container.scrollLeft -= directionMultiplier * (this.currentIndex - i) * imgWidth;
      }
      this.currentIndex = i;
    }
  }

  backOrNext(direction: string) {
    if (this.isLocked) return;
    this.isLocked = true;
    if (isPlatformBrowser(this.platformId)) {
      let container = this.imageSlider.nativeElement;
      let imgWidth = this.img.nativeElement.clientWidth;
      let photoSlider = this.photogallery.nativeElement;
      let photoWidth = this.photogalleryContainer.nativeElement.clientWidth;

      let reverseDirection = this.lang === 'ar';
      let directionMultiplier = reverseDirection ? -1 : 1;

      if (direction === 'back') {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          container.scrollLeft += directionMultiplier * -imgWidth;
          photoSlider.scrollLeft += directionMultiplier * -photoWidth;
        }
      } else if (direction === 'next') {
        if (this.currentIndex < this.pageContent.galleries.length) {
          this.currentIndex++;
          container.scrollLeft += directionMultiplier * imgWidth;
          photoSlider.scrollLeft += directionMultiplier * photoWidth;
        }
      }
      setTimeout(() => {
        this.isLocked = false;
      }, 500);
    }
  }

  @HostListener('window:resize', ['$event'])
  onresize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        this.showButtons = this.pageContent.galleries?.length >= 7;
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        this.showButtons = this.pageContent.galleries?.length >= 5;
      } else {
        this.showButtons = this.pageContent.galleries?.length >= 5;
      }
    }
  }
}
