import { Coordinator } from '@core/models/coordinator.model';
import { WishStatus } from '@core/models/wish-count.model';
import { Initiative } from '@core/models/initiative.model';
import { Entry } from '@core/models/entry.model';
import { Volunteer } from '@core/models/volunteer.model';

export interface Wish {
  id: string;
  status: WishStatus;
  createdDate: string;
  volunteerProfile: Volunteer;
  coordinatorProfile: Coordinator;
  initiative: Initiative;
  entries?: Entry[];
}
