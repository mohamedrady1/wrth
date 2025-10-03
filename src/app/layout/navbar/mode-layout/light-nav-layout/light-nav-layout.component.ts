import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-light-nav-layout',
  templateUrl: './light-nav-layout.component.html',
  styleUrls: ['./light-nav-layout.component.scss'],
})
export class LightNavLayoutComponent implements OnInit {
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
