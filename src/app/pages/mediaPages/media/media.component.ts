import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { navbarLocal } from '../../../local/navbarLocal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent {
  constructor(
    private _GlobalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  lang = this._GlobalService.lang.getValue();
  name: string
  isMediaRoot: boolean = false;
  navbarLocal = navbarLocal;


  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
    this.route.firstChild?.paramMap.subscribe((params) => {
      this.name = params.get('name');
    });
    this.router.events.subscribe(() => {
      this.isMediaRoot = !this.route.firstChild;
    });
  }
}
