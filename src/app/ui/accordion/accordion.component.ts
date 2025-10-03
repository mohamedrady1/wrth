import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  isOpen = false;

  @Input() title = '';
  @Input() desc = '';

  handleAccordionClick() {
    this.isOpen = !this.isOpen;
  }
}
