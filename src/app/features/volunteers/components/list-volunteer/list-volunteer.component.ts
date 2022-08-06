import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../../../../shared/components';
import { Wish } from '@core/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-volunteer',
  templateUrl: './list-volunteer.component.html',
  styleUrls: ['./list-volunteer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListVolunteerComponent extends BaseComponent {
  @Input() set wishes(data: Wish[]) {
    this.wishes$.next(data);
  }
  @Input() set loading(isLoading: boolean) {
    this.loading$.next(isLoading);
  }

  wishes$ = new BehaviorSubject<Wish[]>([]);
  loading$ = new BehaviorSubject<boolean>(true);

  constructor() {
    super();
  }
  onScroll(): void {
    console.log('scrolled!!');
  }
}
