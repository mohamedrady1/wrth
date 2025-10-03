import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { HomeService } from 'src/app/services/home.service';
import { MenuService } from 'src/app/shared/menu.service';
import { navbarLocal } from '../../local/navbarLocal';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() whiteText = true;
  showMenu = false;
  isProgramActive=false;
  menuItems: string[] = [];
  selectedLanguage = this._GlobalService.lang.getValue();
  fixedNavbarLinks = this._HomeService.fixedNavbarLinks;

  allNavLinks: any = {};
  programLinks: any = {};
  activeIndex: number | null = null;
  path:string;

  navbarLocal = navbarLocal;

  constructor(
    private _GlobalService: GlobalService,
    private _HomeService: HomeService,
    private router:Router,
  ) { }


  ngOnInit() {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.selectedLanguage = this._GlobalService.lang.getValue();
      },
    });

    this._HomeService.getHomeData().subscribe({
      next: (res) => {
        this.allNavLinks = res;
        this.allNavLinks.leaderPages = this.allNavLinks.leaderPages.filter(
          (link: any) => link.slug !== 'entrepreneurshipandincubationprograms'
        );
 },
    });
    this._HomeService.getProgramLinks().subscribe({
      next: (res) => {
        this.programLinks = res;
      },
    });
  }
  
  setActiveIndex(path:string,index?: number): void {
    this.activeIndex = index !== undefined ? index : null;
    this.path=path;
    // this.activeIndex = index;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isProgramActive = this.router.url.startsWith(path);     
       }
    });
          if (this.isProgramActive && index === undefined) {
        this.activeIndex = null; 

      }
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  aboutInstitutePages = this._HomeService.home.aboutInstitutePages;
  educationProgramsPages = this._HomeService.home.educationPrograms;
  EntrepreneurshipPages=this._HomeService.home.leadershipProgramsPages;
  awarenessprogrammes=this._HomeService.home.awarenessprogrammes;
  mediaPages = this._HomeService.home.mediaPages;
  loginPages = this._HomeService.home.loginPages;

  changeLanguage(lang: string) {
    this._GlobalService.setLang(lang);
    this._GlobalService.lang.next(lang);
    if (typeof document !== 'undefined') {
      const htmlElement = document.documentElement;
      if (htmlElement.getAttribute('lang') !== lang) {
        htmlElement.setAttribute('lang', lang);
      }

      const dir = lang === 'ar' ? 'rtl' : 'ltr';

      if (htmlElement.getAttribute('dir') !== dir) {
        htmlElement.setAttribute('dir', dir);
      }
    }
  }
  
}
