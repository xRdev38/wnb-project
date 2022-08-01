import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteers-container',
  templateUrl: './volunteers-container.component.html',
  styleUrls: ['./volunteers-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
