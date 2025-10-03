import { Component } from '@angular/core';
import { footerLocal } from './../../local/footer';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerLocal = footerLocal;

  lang = this._GlobalService.lang.getValue();

  constructor(private _GlobalService: GlobalService) {}

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
  }
}
