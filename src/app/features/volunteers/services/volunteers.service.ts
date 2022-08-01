import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';

import { ApiService } from '@core/services/api.service';
import { Wish, WishStatus } from '@core/models';

@Injectable()
export class VolunteersService {
  constructor(private readonly apiService: ApiService) {}

  getAllWishes(): Observable<Wish[]> {
    return this.apiService
      .get('/wishes/')
      .pipe(distinctUntilChanged(), shareReplay(1));
  }

  getWishWithStatus(wishStatus: WishStatus | string): Observable<Wish[]> {
    return this.apiService
      .get(
        '/wishes/',
        new HttpParams({ fromObject: { status: `${wishStatus}` } })
      )
      .pipe(distinctUntilChanged(), shareReplay(1));
  }
}
