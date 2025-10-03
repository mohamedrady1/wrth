import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input() heading: any[]; 
  @Input() groups: any; 
  @Input() lang: string; 
  @Input() Type: any;
  @Input() articleType:number;
}
