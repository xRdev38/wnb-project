import { Injectable } from '@angular/core';
import { Wish, WishStatus } from '@core/models';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { VolunteersService } from './volunteers.service';

export interface Pagination {
  selectedSize: number;
  currentPage: number;
  pageSizes: number[];
}

export interface VolunteerWishState {
  wishes: Wish[];
  pagination: Pagination;
  criteria: WishStatus | string;
  loading: boolean;
}

let stateWishes: VolunteerWishState = {
  wishes: [],
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
    this.loading$
  ).pipe(
    map(([pagination, criteria, wishes, loading]) => {
      return { pagination, criteria, wishes, loading };
    })
  );

  constructor(private readonly volunteersService: VolunteersService) {
    combineLatest(this.criteria$, this.pagination$)
      .pipe(
        switchMap(([criteria, pagination]) => {
          if (criteria === '') {
            return of([]);
          }
          return this.volunteersService.getWishWithStatus(criteria);
        })
      )
      .subscribe(wishes => {
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
