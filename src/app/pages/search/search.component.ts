import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  lang = this._GlobalService.lang.getValue();
  query: string = '';
  searchResults: any = [];
  totalCount: number = 0;
  page: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;

  constructor(
    private searchService: SearchService,
    private _GlobalService: GlobalService
  ) {}

  ngOnInit(): void {
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });
  }

  search() {
    if (this.query) {
      this.searchService
        .search(this.query, this.page, this.pageSize)
        .subscribe({
          next: (response) => {
            this.totalCount = response?.totalCount || 0;
            this.page = response?.page || 0;
            this.pageSize = response?.pageSize || 0;
            this.totalPages = response?.pageCount || 0;

            const data = response.data[0]?.results;

            this.searchResults = data.map((item) => {
              if (item.entityType === 'MediaCenterPages') {
                const type =
                  item.type === 0
                    ? 'news'
                    : item.type === 1
                    ? 'institute-blogs'
                    : '';
                return {
                  ...item,
                  url: `/media/${type}/${item.slug}`,
                };
              }
              if (item.entityType === 'EducationProgramPage') {
                return {
                  ...item,
                  url: `/program/${item.slug}`,
                };
              }
              if (item.entityType === 'TrainingCourse') {
                return {
                  ...item,
                  url: `/program/${item.pageSlug}/${item.slug}`,
                };
              }
              if (item.entityType === 'AboutInstitutePage') {
                return {
                  ...item,
                  url: `/about/${item.slug}`,
                };
              }
              if (item.entityType === 'PrivacyAndUsagePolicyPage') {
                return {
                  ...item,
                  url: `/privacy`,
                };
              }
              if (item.entityType === 'FaqPage') {
                return {
                  ...item,
                  url: `/faqs`,
                };
              }
              if (item.entityType === 'TermsAndConditions') {
                return {
                  ...item,
                  url: `/terms`,
                };
              }
              if (item.entityType === 'JobsPage') {
                return {
                  ...item,
                  url: `/jobs`,
                };
              }
              if (item.entityType === 'Event') {
                return {
                  ...item,
                  url: `/Events/${item.id}/Details`,
                };
              }
              return { ...item, url: '' };
            });
          },
        });
    }
  }

  removeHtmlTags(htmlString: string) {
    return htmlString?.replace(/<\/?[^>]+(>|$)/g, '');
  }

  goToPage(newPage: number): void {
    this.page = newPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.search();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
