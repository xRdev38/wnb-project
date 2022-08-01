import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteers-page',
  templateUrl: './volunteers-page.component.html',
  styleUrls: ['./volunteers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
