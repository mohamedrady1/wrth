import { Component, Input } from '@angular/core';
import { AboutDetailsService } from '../../about-details/about-details.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-wrth-goals',
  templateUrl: './wrth-goals.component.html',
  styleUrls: ['./wrth-goals.component.scss']
})
export class WrthGoalsComponent {
  @Input() lang: string;
  @Input() items: any;
  isLoading:boolean=false;
  itemsList:any=[];

  constructor(private _AboutDetailsService: AboutDetailsService){

  }
  ngOnInit(){
    this.getList();
  }

  private getList(): void {
    this.isLoading = true;
    
    this._AboutDetailsService.getObjectives().pipe(
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
        this.itemsList=response.data;
        this.itemsList[1].icon='assets/images/wrth-goals/hummer.svg';
      }
    });
  }
}
