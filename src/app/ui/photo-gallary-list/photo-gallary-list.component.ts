import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-gallary-list',
  templateUrl: './photo-gallary-list.component.html',
  styleUrls: ['./photo-gallary-list.component.scss']
})
export class PhotoGallaryListComponent {
  @Input() media: any[] = [];
  @Input() name: string = '';
}
