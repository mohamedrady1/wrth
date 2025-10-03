import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-fixed-navbar-links',
  templateUrl: './fixed-navbar-links.component.html',
  styleUrls: ['./fixed-navbar-links.component.scss'],
})
export class FixedNavbarLinksComponent {
  @Input() fixedLinks = [];

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
