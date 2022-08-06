import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BaseComponent } from '../base.component';
import { WishCount, WishStatus } from '@core/models';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavFilterComponent extends BaseComponent {
  @Input() set filters(data: WishCount[]) {
    this.filterData = data;
  }

  get filters(): WishCount[] {
    return this.filterData;
  }

  @Output() statusEmitter = new EventEmitter<WishStatus | null>(null);

  private filterData: WishCount[];

  public constructor() {
    super();
  }

  trackByWishCount(index: number, filter: WishCount): string {
    return `${index}-${filter.status}`;
  }
}
