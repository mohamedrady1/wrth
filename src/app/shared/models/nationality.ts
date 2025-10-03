export class NationalitiesResponse {
  data: NationalityItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export class NationalityItem {
  id: number;
  nameAr: string;
  nameEn: string;
}
