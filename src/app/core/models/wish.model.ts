import { Coordinator } from './coordinator.model';
import { WishStatus } from './wish-count.model';
import { Initiative } from './initiative.model';
import { Entry } from './entry.model';

export interface Wish {
  id: string;
  status: WishStatus;
  createdDate: string;
  coordinatorProfile: Coordinator;
  initiative: Initiative;
  entries?: Entry[];
}
