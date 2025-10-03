import { isPlatformServer } from '@angular/common';
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';

@Directive({
  selector: 'img[appImgError]' // Target img tags with this directive
  ,standalone:true
})
export class ImgErrorDirective {
  @Input() defaultImage: string = 'assets/images/defaults/default-image.jpg'; // Default fallback image
  @Input() altText: string = ''; // Alt text input for accessibility (SEO)

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  @HostListener('error')
  onError() {
    // Check if we are in the browser to avoid modifying the image in SSR
    if (!isPlatformServer(this.platformId)) {
      // Set the fallback image and alt text if an error occurs
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.defaultImage);
      if (this.altText) {
        this.renderer.setAttribute(this.el.nativeElement, 'alt', this.altText);
      }
    }
  }

  // On initial load, we can also set the alt text for SEO accessibility
  ngOnInit() {
    if (!isPlatformServer(this.platformId)) {
      if (this.altText) {
        this.renderer.setAttribute(this.el.nativeElement, 'alt', this.altText);
      }
    }
  }
}