import { Injectable } from '@angular/core';
import { Wish, WishCount, WishStatus } from '@core/models';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {
  distinctUntilChanged,
  first,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { VolunteersService } from './volunteers.service';
import { OverlayService } from '@core/services';

export interface Pagination {
  selectedSize: number;
  currentPage: number;
  pageSizes: number[];
}

export interface VolunteerWishState {
  wishes: Wish[];
  count: WishCount[];
  pagination: Pagination;
  criteria: WishStatus | string;
  loading: boolean;
}

let stateWishes: VolunteerWishState = {
  wishes: [],
  count: [],
  criteria: '',
  pagination: {
    currentPage: 0,
    selectedSize: 5,
    pageSizes: [5, 10, 20, 50],
  },
  loading: false,
};

@Injectable({
  providedIn: 'root',
})
export class VolunteersWishFacadeService {
  private store = new BehaviorSubject<VolunteerWishState>(stateWishes);
  private state$ = this.store.asObservable();

  wishes$ = this.state$.pipe(
    map(state => state.wishes),
    distinctUntilChanged()
  );
  count$ = this.state$.pipe(
    map(state => state.count),
    distinctUntilChanged()
  );
  criteria$ = this.state$.pipe(
    map(state => state.criteria),
    distinctUntilChanged()
  );
  pagination$ = this.state$.pipe(
    map(state => state.pagination),
    distinctUntilChanged()
  );
  loading$ = this.state$.pipe(map(state => state.loading));

  vm$: Observable<VolunteerWishState> = combineLatest(
    this.pagination$,
    this.criteria$,
    this.wishes$,
    this.count$,
    this.loading$
  ).pipe(
    map(([pagination, criteria, wishes, count, loading]) => {
      return { pagination, criteria, wishes, count, loading };
    })
  );

  constructor(
    private readonly volunteersService: VolunteersService,
    private readonly overlayService: OverlayService
  ) {
    combineLatest(this.criteria$, this.pagination$)
      .pipe(
        switchMap(([criteria, _]) => {
          this.overlayService.show();
          if (criteria === '') {
            return this.volunteersService.getAllWishes();
          }
          return this.volunteersService.getWishWithStatus(criteria);
        }),
        tap(() => {
          if (stateWishes.count.length === 0) {
            this.volunteersService
              .getWishByCount()
              .pipe(distinctUntilChanged(), first())
              .subscribe(count => {
                this.updateState({ ...stateWishes, count });
              });
          }
        })
      )
      .subscribe(wishes => {
        this.overlayService.hide();
        this.updateState({ ...stateWishes, wishes, loading: false });
      });
  }

  updateSearchCriteria(criteria: string) {
    this.updateState({ ...stateWishes, criteria, loading: true });
  }

  updatePagination(selectedSize: number, currentPage: number = 0) {
    const pagination = { ...stateWishes.pagination, currentPage, selectedSize };
    this.updateState({ ...stateWishes, pagination, loading: true });
  }

  private updateState(state: VolunteerWishState) {
    this.store.next((stateWishes = state));
  }
}
