import { Component, Input } from '@angular/core';
import { ImgErrorDirective } from 'src/app/directives/img-error.directive';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html'
  ,  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input()item:any;
  @Input() name: any;
  
  lang = this._GlobalService.lang.getValue();
  constructor(
    private _GlobalService: GlobalService
  ){}
  ngOnit(){
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    })
  }
  
   removeHtmlTags(htmlString: string) {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, '');
  }
  
  }
