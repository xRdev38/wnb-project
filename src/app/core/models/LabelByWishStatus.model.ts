import { WishStatus } from '@core/models/wish-count.model';

export const LabelByWishStatus: Record<WishStatus, string> = {
  [WishStatus.Application]: 'Candidature',
  [WishStatus.Discussion]: 'Échange',
  [WishStatus.WaitingAssociationValidation]: 'Date à valider',
  [WishStatus.WaitingManagerValidation]: 'En attente du manager',
  [WishStatus.InProgress]: 'En cours',
};
