import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from 'src/app/global.service';
import { RouterModule } from '@angular/router';
import { ImgErrorDirective } from 'src/app/directives/img-error.directive';
import { LazyLoadImgDirective } from 'src/app/directives/lazy-load-img.directive';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterModule,ImgErrorDirective,LazyLoadImgDirective],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
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
