import { Component, Input } from '@angular/core';
import { AboutDetailsService } from '../../about-details/about-details.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input() lang:string;
  @Input() items:any[];

  itemsList:any=[];
  selectedSlug: string='vision' ;
  isLoading:boolean=false;

  constructor(private _AboutDetailsService: AboutDetailsService){}

  ngOnInit(){
    this.getList();
  }

  private getList(): void {
    this.isLoading = true;
    
    this._AboutDetailsService.getInstituteStrategy().pipe(
      // Catch any error and handle it
      catchError((error) => {
        console.error('Error fetching about page:', error);
        return of(null); // Return a fallback value or handle it as needed
      }),
      // Finalize will always run after the observable completes or errors out
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe((response) => {
      if (response) {
        this.itemsList = response.data;

        // Remove the item with slug 'goals'
        this.itemsList = this.itemsList.filter((item: any) => item.slug !== 'goals');
        
        // Iterate over the filtered list and update icons
        this.itemsList?.forEach((item: any) => {
          if (item.slug === 'vision') {
            item.icon = 'assets/images/tabs/icons-02.png';
          } else if (item.slug === 'mission') {
            item.icon = 'assets/images/tabs/icons-03.png';
          } else if (item.slug === 'strategicpillars') {
            item.icon = 'assets/images/tabs/icons-05.png';
          } else if (item.slug === 'institutevalues') {
            item.icon = 'assets/images/tabs/icons-06.png';
          } else {
            item.icon = 'assets/images/tabs/default-icon.svg';
          }
        });
        
        this.selectedSlug = this.itemsList?.[0]?.slug; 
      }
    });
  }
  selectItem(slug: string): void {
    this.selectedSlug = slug ;
  }
}
