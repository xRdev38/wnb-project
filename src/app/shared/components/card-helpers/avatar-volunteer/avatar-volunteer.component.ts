import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../../index';
import { Avatar } from '../../../models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-avatar-volunteer',
  templateUrl: './avatar-volunteer.component.html',
  styleUrls: ['./avatar-volunteer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarVolunteerComponent extends BaseComponent {
  avatar$ = new BehaviorSubject<Avatar | null>(null);
  extensionImg = '.png';

  @Input() set avatar(avatar: Avatar) {
    this.avatar$.next(avatar);
  }

  constructor() {
    super();
  }
}
