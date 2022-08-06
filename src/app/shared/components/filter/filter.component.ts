import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishStatus } from '@core/models';
import { BaseComponent } from '../base.component';
import { LabelByWishStatus } from '@core/models/LabelByWishStatus.model';
import { BehaviorSubject } from 'rxjs';

export interface FilterData {
  status: WishStatus;
  count?: number;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent extends BaseComponent {
  LabelByWishStatus = LabelByWishStatus;

  @Input() set filter(data: FilterData) {
    this.filterData$.next(data);
  }

  @Output() status = new EventEmitter<WishStatus | null>(null);

  filterData$ = new BehaviorSubject<FilterData | null>(null);
}
