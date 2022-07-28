import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavFilterComponent extends BaseComponent {
  public constructor() {
    super();
  }
}
