import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { WishCount } from '@core/models';

export interface FilterData extends WishCount {
  className: string;
}

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavFilterComponent extends BaseComponent {
  @Input() set filters(data: FilterData[]) {
    this.filterData = data;
  }

  get filters(): FilterData[] {
    return this.filterData;
  }

  private filterData: FilterData[];

  public constructor() {
    super();
  }

  trackByWishCount(index: number, filter: FilterData): string {
    return `${index}-${filter.status}`;
  }
}
