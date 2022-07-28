import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export class BaseComponent implements OnInit, OnDestroy, AfterViewInit {
  public onDestroy$ = new ReplaySubject<void>(1);
  public onInit$ = new ReplaySubject<void>(1);
  public onAfterViewInit$ = new ReplaySubject<void>(1);

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public ngOnInit(): void {
    this.onInit$.next();
    this.onInit$.complete();
  }

  public ngAfterViewInit(): void {
    this.onAfterViewInit$.next();
    this.onAfterViewInit$.complete();
  }
}
