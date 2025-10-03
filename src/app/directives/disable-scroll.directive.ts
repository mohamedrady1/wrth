import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableScroll]' // Use this attribute in your HTML
})
export class DisableScrollDirective {

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    event.preventDefault(); // Prevent the default scroll behavior
  }
}
