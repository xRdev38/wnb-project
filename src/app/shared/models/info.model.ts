import { Entry, WishStatus } from '@core/models';

export interface Info {
  status: WishStatus;
  comment?: string;
  entries?: Entry[];
}
