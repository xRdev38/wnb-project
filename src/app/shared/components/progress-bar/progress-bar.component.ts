import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

interface ProgressData {
  name: string;
  percent: number;
}

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent extends BaseComponent {
  @Input() set Progress(data: ProgressData[]) {
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
