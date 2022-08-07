import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Entry } from '@core/models';
import { Info } from '../../../models/info.model';
import { takeUntil, tap } from 'rxjs/operators';
import { FilterData } from '../../filter/filter.component';
import { DatePipe } from '@angular/common';

interface DateParse {
  dateBegin: string;
  dateEnd: string;
}

@Component({
  selector: 'app-info-volunteer',
  templateUrl: './info-volunteer.component.html',
  styleUrls: ['./info-volunteer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoVolunteerComponent extends BaseComponent {
  info$ = new BehaviorSubject<Info | null>(null);
  status$ = new BehaviorSubject<FilterData | null>(null);
  entries$ = new BehaviorSubject<string[] | null>(null);
  comment$ = new BehaviorSubject<string | null>(null);

  @Input() set info(data: Info) {
    this.info$.next(data);
  }

  constructor(private readonly datePipe: DatePipe) {
    super();
    combineLatest([this.onInit$, this.info$])
      .pipe(
        takeUntil(this.onDestroy$),
        tap(([_, eltInfo]) => {
          this.status$.next(this.createFilterData(eltInfo));
          this.entries$.next(this.parseAllEntry(eltInfo?.entries) ?? null);
          this.comment$.next(eltInfo?.comment ?? null);
        })
      )
      .subscribe();
  }

  trackByEntry(index: number, entry: string): string {
    return `${index}-${entry}`;
  }

  private createFilterData(infoData: Info): FilterData {
    return {
      status: infoData.status,
    };
  }

  private subtractHours(firstDate, secondDate): string {
    const timeStamp = Math.abs(secondDate - firstDate) / 36e5;
    const newDate = new Date(timeStamp);
    return `(${this.padTo2Digits(newDate.getHours())}h${this.padTo2Digits(
      newDate.getMinutes()
    )})`;
  }

  private parseAllEntry(entries: Entry[]): string[] {
    return entries.map((entry: Entry) => {
      const dateParsed = this.datePipe.transform(entry.dateBegin, 'dd/MM/y');
      const { dateBegin, dateEnd } = this.parseDate(entry);
      console.log(dateParsed, dateBegin, dateEnd);
      return `${dateParsed}, de ${dateBegin} à ${dateEnd} `;
    });
  }

  private parseDate(date: Entry): DateParse {
    const dateBeginParse = new Date(date.dateBegin);
    const dateEndParse = new Date(date.dateEnd);
    return {
      dateBegin:
        this.padTo2Digits(dateBeginParse.getHours()) +
        'h' +
        this.padTo2Digits(dateBeginParse.getMinutes()),
      dateEnd:
        this.padTo2Digits(dateEndParse.getHours()) +
        'h' +
        this.padTo2Digits(dateEndParse.getMinutes()) +
        ' ' +
        this.subtractHours(dateEndParse, dateBeginParse),
    };
  }

  private padTo2Digits(num: number): string {
    return String(num).padStart(2, '0');
  }
}
