import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input() label;
  @Input() name;
  @Input() required = true;
  @Input() control;
  @Input() group;
}
