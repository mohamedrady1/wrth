export class WorkShopsResponse {
  data: WorkShopItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export class WorkShopItem {
  id: number;
  titleAr: string;
  titleEn: string;
  detailsAr: string;
  detailsEn: string;
  locationAr: string;
  locationEn: string;
  photoFile: string;
  startDate: string;
  endDate: string;
  registeredUsers: number;
  usersQuota: number;
  createdBy: number;
  createdByUser;
  updatedBy: number | null;
  updatedByUser;
  createdAt: string;
  updatedAt: string | null;
  ckecked: boolean = false;
}

