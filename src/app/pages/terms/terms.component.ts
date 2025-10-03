import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { TermsService } from 'src/app/services/terms.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent {
  lang = this._GlobalService.lang.getValue();
  isLoading = false;

  terms: any = {};
  constructor(
    private _TermsService: TermsService,
    private _GlobalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });

    this._TermsService.getTermsData().subscribe({
      next: (res) => {
        this.terms = res;
        this.isLoading = false;
      },
    });
  }
}
