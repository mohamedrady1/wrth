import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { PrivacyService } from 'src/app/services/privacy.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent {
  lang = this._GlobalService.lang.getValue();
  isLoading = false;

  privacyData: any = [];
  constructor(
    private _PrivacyService: PrivacyService,
    private _GlobalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });

    this._PrivacyService.getPrivacyData().subscribe({
      next: (res) => {
        this.privacyData = res?.data?.[0];
        this.isLoading = false;
      },
    });
  }
}
