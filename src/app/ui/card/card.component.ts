import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  removeHtmlTags(htmlString: string) {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, '');
  }

  @Input() title;
  @Input() description;
  @Input() imageUrl;
  @Input() className = 'h-50';
  @Input() link;
}
