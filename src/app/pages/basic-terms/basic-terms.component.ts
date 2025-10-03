import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-basic-terms',
  templateUrl: './basic-terms.component.html',
  styleUrls: ['./basic-terms.component.scss']
})
export class BasicTermsComponent {
  media: any = [];
  lang = this._GlobalService.lang.getValue();
  isLangChange: boolean = false;

  constructor(private _GlobalService: GlobalService) { }

  ngOnInit() {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.isLangChange = true;
        this.lang = this._GlobalService.lang.getValue();
        setTimeout(() => {
          this.isLangChange = false;
        }, 0);
      },
    });
  }
}
