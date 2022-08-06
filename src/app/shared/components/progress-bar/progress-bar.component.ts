import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { WishStatus } from '@core/models';

export interface ProgressData {
  name: WishStatus;
  label: string;
  percent: string;
}

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent extends BaseComponent {
  @Input() set progress(data: ProgressData[]) {
    this.progressData = data;
  }

  get progress(): ProgressData[] {
    return this.progressData;
  }

  private progressData: ProgressData[];

  public constructor() {
    super();
  }

  trackByTypeProgress(index: number, progress: ProgressData): string {
    return `${index}-${progress.name}`;
  }
}
