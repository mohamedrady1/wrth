import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event);
  }

  onInputChange(event) {
    // Remove all non-digit characters
    let newVal = event.replace(/\D/g, '');

    // Check if the number starts with '966' and add it if missing
    if (!newVal.startsWith('966')) {
      newVal = '966' + newVal;
    }

    // Format the number as +966 12-345-6789
    newVal = newVal.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, '+$1 $2-$3-$4');

    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
