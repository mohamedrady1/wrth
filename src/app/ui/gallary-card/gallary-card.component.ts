import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-gallary-card',
  templateUrl: './gallary-card.component.html',
  styleUrls: ['./gallary-card.component.scss']
})
export class GallaryCardComponent {
  @Input() item: any;
  @Input() name: any;
  lang = this._GlobalService.lang.getValue();

  constructor(
    private _GlobalService: GlobalService
  ) {}
  ngOnit(){
    this._GlobalService.lang.subscribe({

      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
  }
  removeHtmlTags(htmlString: string) {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, '');
  }
  
}
