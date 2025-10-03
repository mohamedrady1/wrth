import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { navbarLocal } from '../../../local/navbarLocal';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent {
  constructor(
    private _HomeService: HomeService,
    private _GlobalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  lang = this._GlobalService.lang.getValue();
  programs = this._HomeService.home.educationPrograms.slice(0, 3);

  homeData: any = {};
  isProgramRoot: boolean = false;
  navbarLocal = navbarLocal;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });

    this.router.events.subscribe(() => {
      this.isProgramRoot = !this.route.firstChild;
    });
  }
}
