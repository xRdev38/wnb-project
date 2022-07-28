export enum WishStatus {
  Application = 'APPLICATION',
  Discussion = 'DISCUSSION',
  WaitingAssociationValidation = 'WAITING_ASSOCIATION_VALIDATION',
  WaitingManagerValidation = 'WAITING_MANAGER_VALIDATION',
  InProgress = 'IN_PROGRESS',
}

export interface WishCount {
  status: WishStatus;
  count: number;
}
