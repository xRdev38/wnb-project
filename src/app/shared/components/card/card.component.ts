import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { Wish } from '@core/models';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Avatar } from '../../models';
import { Identity } from '../../models/identity.model';
import { Info } from '../../models/info.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent extends BaseComponent {
  wish$ = new BehaviorSubject<Wish | null>(null);
  avatar$ = new BehaviorSubject<Avatar | null>(null);
  identity$ = new BehaviorSubject<Identity | null>(null);
  info$ = new BehaviorSubject<Info | null>(null);

  private avatars = [
    'avatar01',
    'avatar02',
    'avatar03',
    'avatar05',
    'avatar06',
    'avatar07',
  ];

  @Input() set wish(wish: Wish) {
    this.wish$.next(wish);
  }
  public constructor() {
    super();
    combineLatest([this.onInit$, this.wish$])
      .pipe(
        takeUntil(this.onDestroy$),
        tap(([_, wish]) => {
          this.avatar$.next(this.createAvatarModel(wish));
          this.identity$.next(this.createIdentity(wish));
          this.info$.next(this.createInfo(wish));
        })
      )
      .subscribe();
  }

  private createAvatarModel(wish: Wish): Avatar {
    return {
      id: wish.id,
      dateCreated: wish.createdDate,
      srcUrl: this.randomizeAvatar(this.avatars),
    };
  }

  private createIdentity(wish: Wish): Identity {
    return {
      firstname: wish.volunteerProfile.firstname,
      lastname: wish.volunteerProfile.lastname,
      city: wish.initiative.city,
      company: {
        name: wish.volunteerProfile.company.name,
      },
      coordinator: {
        firstname: wish.coordinatorProfile.firstname,
        lastname: wish.coordinatorProfile.lastname,
      },
      title: wish.initiative.title,
    };
  }

  private createInfo(wish: Wish): Info {
    return {
      status: wish.status,
      entries: wish?.entries ?? [],
      comment: '',
    };
  }

  private randomizeAvatar(avatars: string[]): string {
    const index = Math.random() * (avatars.length - 1) + 1;
    return avatars?.[Math.floor(index) - 1] ?? avatars[0];
  }
}
