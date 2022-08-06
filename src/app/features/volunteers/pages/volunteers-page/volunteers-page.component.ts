import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent, ProgressData } from '../../../../shared/components';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { WishCount } from '@core/models';
import { LabelByWishStatus } from '@core/models/LabelByWishStatus.model';
import { VolunteersWishFacadeService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-volunteers-page',
  templateUrl: './volunteers-page.component.html',
  styleUrls: ['./volunteers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersPageComponent extends BaseComponent {
  filters$ = this.volunteersWishFacadeService.count$;
  progressData$: Observable<ProgressData[]>;
  count$: Observable<number>;

  constructor(
    private readonly volunteersWishFacadeService: VolunteersWishFacadeService
  ) {
    super();

    this.count$ = this.filters$.pipe(
      distinctUntilChanged(),
      map(counts => this.calculateTotal(counts))
    );

    this.progressData$ = this.filters$.pipe(
      distinctUntilChanged(),
      map((counts: WishCount[]) => this.createProgressData(counts))
    );
  }

  filterByStatus(event: any): void {
    this.volunteersWishFacadeService.updateSearchCriteria(event);
  }

  private createProgressData(wishesCount: WishCount[]): ProgressData[] {
    const total = this.calculateTotal(wishesCount);
    return wishesCount.map((wishCount: WishCount) => {
      const percent = this.calculatePercent(wishCount.count, total);
      return {
        name: wishCount.status,
        label: LabelByWishStatus[wishCount.status],
        percent: `${percent}`,
      };
    });
  }

  private calculateTotal(wishesCount: WishCount[]): number {
    let totalCount = 0;
    wishesCount.forEach((data: WishCount) => {
      totalCount += data.count;
    });
    return totalCount;
  }

  private calculatePercent(
    numberToPercent: number,
    dividerTotal: number
  ): number {
    return (numberToPercent * 100) / dividerTotal;
  }
}
