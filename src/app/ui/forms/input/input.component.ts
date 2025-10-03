import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type = 'text';
  @Input() label;
  @Input() name;
  @Input() required = true;
  @Input() control;
  @Input() group;

  lang = this._GlobalService.lang.getValue();

  constructor(private _GlobalService: GlobalService) {}

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
  }
}
