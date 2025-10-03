export class AcademicDegreesResponse {
  data: AcademicDegreeItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export class AcademicDegreeItem {
  id: number;
  nameAr: string;
  nameEn: string;
  ckecked: boolean = false;
}
