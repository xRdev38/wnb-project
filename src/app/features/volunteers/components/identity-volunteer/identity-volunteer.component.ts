import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseComponent } from '../../../../shared/components';
import { Identity } from '../../models/identity.model';
import { tap } from 'rxjs/operators';

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

  @Input() set identity(data: Identity) {
    this.identity$.next(data);
  }

  constructor() {
    super();
    this.identity$.pipe(
      tap((eltIdentity: Identity) => {
        this.profileName$.next(
          `${eltIdentity.firstname} ${eltIdentity.lastname}`
        );
        this.coordinatorName$.next(
          `${eltIdentity.coordinator.firstname} ${eltIdentity.coordinator.lastname}`
        );
      })
    );
  }
}
