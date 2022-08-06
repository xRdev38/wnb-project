import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Entry } from '@core/models';
import { Info } from '../../../models/info.model';
import { takeUntil, tap } from 'rxjs/operators';
import { FilterData } from '../../filter/filter.component';

@Component({
  selector: 'app-info-volunteer',
  templateUrl: './info-volunteer.component.html',
  styleUrls: ['./info-volunteer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoVolunteerComponent extends BaseComponent {
  info$ = new BehaviorSubject<Info | null>(null);
  status$ = new BehaviorSubject<FilterData | null>(null);
  entries$ = new BehaviorSubject<Entry[] | null>(null);
  comment$ = new BehaviorSubject<string | null>(null);

  @Input() set info(data: Info) {
    this.info$.next(data);
  }

  constructor() {
    super();
    combineLatest([this.onInit$, this.info$])
      .pipe(
        takeUntil(this.onDestroy$),
        tap(([_, eltInfo]) => {
          this.status$.next(this.createFilterData(eltInfo));
          this.entries$.next(eltInfo?.entries ?? null);
          this.comment$.next(eltInfo?.comment ?? null);
        })
      )
      .subscribe();
  }

  trackByEntry(index: number, entry: Entry): string {
    return `${index}-${entry.dateBegin}`;
  }

  private createFilterData(infoData: Info): FilterData {
    return {
      status: infoData.status,
    };
  }
}
