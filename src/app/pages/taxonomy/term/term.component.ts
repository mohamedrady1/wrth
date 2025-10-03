import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-term',  
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent {
  media: any = [];
  // totalCount: number = 0;
  // page: number = 1;
  // pageSize: number = 9;
  // totalPages: number = 0;
  // type: number = 0;
  lang = this._GlobalService.lang.getValue();
  heading: any = {};
  isLangChange: boolean = false;
  isLoading: boolean = false;
  id: any;

  constructor(private _GlobalService: GlobalService,
    private _MediaService: MediaService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(ele => {
      this.id = ele.get('id')
    });

    this.heading = this._MediaService.termsList.find(
      (item) => item.id == this.id
    );

    this._GlobalService.lang.subscribe({
      next: () => {
        this.isLangChange = true;
        this.lang = this._GlobalService.lang.getValue();
        setTimeout(() => {
          this.isLangChange = false;
        }, 0);
      },
    });
    this.loadMedia();
  }
  
  loadMedia(): void {
    this.isLoading = true;
    this._MediaService.getMediaBlogCategorate(this.id).subscribe({
      next: (response) => {
        this.media = response;
        console.log(response)
        this.isLoading = false;

      },
    });
  }
  // goToPage(newPage: number): void {
  //   // this.page = newPage;
  //   this.loadMedia();
  //     window.scrollTo({
  //       top: 270,
  //       behavior: 'smooth',
  //     });
  // }

  // get pages(): number[] {
  //   return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  // }

}
