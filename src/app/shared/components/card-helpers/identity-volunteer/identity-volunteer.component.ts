import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { BaseComponent } from '../../index';
import { Identity } from '../../../models/identity.model';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-identity-volunteer',
  templateUrl: './identity-volunteer.component.html',
  styleUrls: ['./identity-volunteer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdentityVolunteerComponent extends BaseComponent {
  identity$ = new BehaviorSubject<Identity | null>(null);
  profileName$ = new BehaviorSubject<string | null>(null);
  coordinatorName$ = new BehaviorSubject<string | null>(null);
  city$ = new BehaviorSubject<string | null>(null);
  title$ = new BehaviorSubject<string | null>(null);

  @Input() set identity(data: Identity) {
    this.identity$.next(data);
  }

  constructor() {
    super();
    combineLatest([this.onInit$, this.identity$])
      .pipe(
        takeUntil(this.onDestroy$),
        tap(([_, eltIdentity]) => {
          if (!!eltIdentity) {
            this.profileName$.next(
              `${eltIdentity.firstname} ${eltIdentity.lastname}`
            );
            this.coordinatorName$.next(
              `${eltIdentity.coordinator.firstname} ${eltIdentity.coordinator.lastname}`
            );
            this.city$.next(`${eltIdentity.city}`);
            this.title$.next(`${eltIdentity.title}`);
          }
        })
      )
      .subscribe();
  }
}
