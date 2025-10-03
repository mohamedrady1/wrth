export interface IEvent {
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
  termsAr:string;
  terms:string;
  updatedBy: number | null;
  updatedByUser;
  createdAt: string;
  updatedAt: string | null;
  startTime: string | null;
  endTime: string | null;
  isHyperLink: boolean;
  extrenelUrl: string | null;
  mapLocationUrl: string | null;
  price: number | null;
  workshops: any[];
  discussions: any[];
}
export interface EventsResponse {
  data: IEvent[];
  totalCount: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export class EventRegistrationQrcode {
  name: string | null;
  phone: string | null;
  email: string | null;
  isValid: boolean;
}
export class EventPrice {
  id: number;
  name: string;
  price: string;
  eventId: number;
}
