import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trita';
  lang = this._GlobalService.lang.getValue();

  constructor( private _GlobalService : GlobalService) {}

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next : () => {
        this.lang = this._GlobalService.lang.getValue();
      }
    })
  }
}
