import { Component, Input } from '@angular/core';
import { navbarLocal } from '../../../local/navbarLocal';
import { GlobalService } from 'src/app/global.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
})
export class NavbarMobileComponent {
  selectedLanguage = this._GlobalService.lang.getValue();
  @Input() whiteText;
  @Input() menuItems;
  @Input() aboutInstitutePages;
  @Input() EntrepreneurshipPages;
  @Input() awarenessprogrammes;
  @Input() showMenu;
  @Input() fixedNavbarLinks;
  
  @Input() educationProgramsPages;
  @Input() mediaPages;
  @Input() communicationPages;
  @Input() leaderShipPages;
  @Input() loginPages;

  isSubMenuOpenInstitute = false;
  isSubMenuOpenEntrepreneurship = false;
  isSubMenuOpenPrograms = false;
  isSubMenuOpenMedia = false;
  isSubMenuOpeneducations=false;
  isSubMenuOpenAwarenessprogrammes=false;
  isSubMenuLogin=false;
  activeIndex:number;
  navbarLocal = navbarLocal;
  path:string;
  isProgramActive=false;


  constructor(private _GlobalService: GlobalService,private router:Router) {}

  ngOnInit() {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.selectedLanguage = this._GlobalService.lang.getValue();
      },
    });
  }
  setSubMenuState(menuName: string) {
    if (menuName === 'Institute') {
      this.isSubMenuOpenInstitute = !this.isSubMenuOpenInstitute;
    } else if (menuName === 'Entrepreneurship') {
      this.isSubMenuOpenEntrepreneurship = !this.isSubMenuOpenEntrepreneurship;
    } else if (menuName === 'Programs') {
      this.isSubMenuOpenPrograms = !this.isSubMenuOpenPrograms;
    } else if (menuName === 'Media') {
      this.isSubMenuOpenMedia = !this.isSubMenuOpenMedia;
    } else if (menuName === 'Educations') {
      this.isSubMenuOpeneducations = !this.isSubMenuOpeneducations;
    } else if (menuName === 'Awarenessprogrammes') {
      this.isSubMenuOpenAwarenessprogrammes = !this.isSubMenuOpenAwarenessprogrammes;
    } else if (menuName === 'Login') {
      this.isSubMenuLogin = !this.isSubMenuLogin;
    }
  
    this.closeOtherMenus(menuName);
  }
  
  closeOtherMenus(openedMenu: string) {
    const menus = ['Institute', 'Entrepreneurship', 'Programs', 'Media', 'Educations', 'Awarenessprogrammes', 'Login'];
    
    menus.forEach(menu => {
      if (menu !== openedMenu) {
        this[`isSubMenuOpen${menu}`] = false;
      }
    });
  }
  setActiveIndex(path:string,index?: number): void {
    index=null;
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
  toggleSubMenuState(menuName: string) {
    this.setSubMenuState(menuName);
  }
  changeLanguage(lang: string) {
    this._GlobalService.lang.next(lang);
  }
}
