import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-dark-nav-layout',
  templateUrl: './dark-nav-layout.component.html',
  styleUrls: ['./dark-nav-layout.component.scss']
})
export class DarkNavLayoutComponent implements OnInit{
  lang = this._GlobalService.lang.getValue();

  constructor(private _GlobalService : GlobalService) {}

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next : () => {
        this.lang = this._GlobalService.lang.getValue();
      }
    })
  }
}
