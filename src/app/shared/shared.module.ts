import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './phonemask.directive';
import { TruncateTextDirective } from './truncate-text.directive';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [PhoneMaskDirective, TruncateTextDirective],
  imports: [CommonModule, NgSelectModule],
  exports: [PhoneMaskDirective, TruncateTextDirective, NgSelectModule],
})
export class SharedModule {}
