import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTruncateText]'
})
export class TruncateTextDirective {
  @Input() truncateLength: number = 50;
  @Input() showMoreText: string = '....المزيد';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.truncateText();
  }

  @HostListener('click')
  onClick() {
    this.truncateText();
  }

  private truncateText() {
    const text = this.el.nativeElement.innerText;
    if (text.length > this.truncateLength) {
      const truncatedText = text.substring(0, this.truncateLength);
      const moreText = text.substring(this.truncateLength);
      this.el.nativeElement.innerText = truncatedText;
      const showMoreLink = this.renderer.createElement('a');
      this.renderer.setProperty(showMoreLink, 'innerText', this.showMoreText);
      this.renderer.setStyle(showMoreLink, 'cursor', 'pointer');
      this.renderer.appendChild(this.el.nativeElement, showMoreLink);

      showMoreLink.addEventListener('click', () => {
        this.el.nativeElement.innerText = truncatedText + moreText;
        this.renderer.removeChild(this.el.nativeElement, showMoreLink);
      });
    }
  }
}
