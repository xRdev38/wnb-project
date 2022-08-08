import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../../../../shared';
import { VolunteersWishFacadeService } from '../../services';

@Component({
  selector: 'app-volunteers-container',
  templateUrl: './volunteers-container.component.html',
  styleUrls: ['./volunteers-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteersContainerComponent extends BaseComponent {
  wishes$ = this.volunteersWishFacadeService.wishes$;
  loading$ = this.volunteersWishFacadeService.loading$;

  constructor(
    private readonly volunteersWishFacadeService: VolunteersWishFacadeService
  ) {
    super();
  }
}
