import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/shared/models/event';
import { EventsService } from '../events.service';
import { MenuService } from 'src/app/shared/menu.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  lang = this._GlobalService.lang.getValue();
  isLangChange: boolean = false;

  menuItems: string[] = [];

  events: IEvent[] = [];

  constructor(private eventsService: EventsService,
    private menuService: MenuService,
    private _GlobalService: GlobalService

  ) {
    this.eventsService.getAllEvents().subscribe((res) => {
      this.events = res;
    }, (error) => {
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.loadItems();
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

  loadItems() {
    this.menuService.loadItems().subscribe((res) => {
      this.menuItems = res
    })
  }

}
