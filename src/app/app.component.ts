import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'wnb-interview-mini-project';
  isLoading$: Observable<boolean>;

  constructor(private readonly overlayService: OverlayService) {}

  ngOnInit() {
    this.isLoading$ = this.overlayService.isLoading;
  }
}
