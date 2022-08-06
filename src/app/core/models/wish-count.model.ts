export enum WishStatus {
  Application = 'APPLICATION',
  Discussion = 'DISCUSSION',
  WaitingAssociationValidation = 'WAITING_ASSOCIATION_VALIDATION',
  WaitingManagerValidation = 'WAITING_MANAGER_VALIDATION',
  InProgress = 'IN_PROGRESS',
  UserHasParticipated = 'USER_HAS_PARTICIPATED',
  Cancelled = 'CANCELLED',
}

export interface WishCount {
  status: WishStatus;
  count: number;
}
