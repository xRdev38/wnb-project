import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent extends BaseComponent {
  public constructor() {
    super();
  }
}
