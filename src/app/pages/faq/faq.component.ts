import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  lang = this._GlobalService.lang.getValue();
  totalCount: number = 0;
  page: number = 1;
  pageSize: number = 10;
  totalPages = 0;
  faqList: any = [];
  constructor(
    private _FaqService: FaqService,
    private _GlobalService: GlobalService
  ) {}

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
        this.loadFaqs();
      },
    });

    this.loadFaqs();
  }

  loadFaqs(): void {
    this._FaqService.getFaqsData(this.page, this.pageSize).subscribe({
      next: (res) => {
        this.faqList = res?.data;
        this.totalCount = res?.totalCount || 0;
        this.page = res?.page || 0;
        this.pageSize = res?.pageSize || 0;
        this.totalPages = res?.pageCount || 0;
      },
    });
  }

  goToPage(newPage: number): void {
    this.page = newPage;
    this.loadFaqs();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
