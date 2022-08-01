import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-volunteer',
  templateUrl: './info-volunteer.component.html',
  styleUrls: ['./info-volunteer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoVolunteerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
