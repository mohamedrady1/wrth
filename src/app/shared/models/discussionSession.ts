export class DiscussionSessionsResponse {
  data: DiscussionSessionItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export class DiscussionSessionItem {
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
