import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImg]',
  standalone:true
})
export class LazyLoadImgDirective {

  constructor(
    private el:ElementRef<HTMLImageElement>,
  ) {}
  ngOnInit(){
    this.lazyLoadImage()
  }
  lazyLoadImage(){
    const support ="loading" in HTMLImageElement.prototype;
    if(support){
      this.el.nativeElement.setAttribute('loading', 'lazy')
    }else{
      const observer=new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            this.loadImage();
            observer.unobserve(entry.target);
          }
        })
      })
      observer.observe(this.el.nativeElement);
    }

  }
  loadImage(){
    const imgElement = this.el.nativeElement;

    const src = imgElement.getAttribute('src');
    if (src) {
      imgElement.src = src; 
    }
  }
}
