import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-volunteer',
  templateUrl: './list-volunteer.component.html',
  styleUrls: ['./list-volunteer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListVolunteerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
