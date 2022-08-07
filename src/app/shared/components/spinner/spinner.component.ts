import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent extends BaseComponent {
  @Input() set size(data: number) {
    this.sizeStyle = data;
  }

  get size(): number {
    return this.sizeStyle;
  }

  private sizeStyle = 2;

  constructor() {
    super();
  }
}
