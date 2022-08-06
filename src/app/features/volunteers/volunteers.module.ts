import { LOCALE_ID, NgModule } from '@angular/core';
import { ListVolunteerComponent } from './components';
import { CommonModule } from '@angular/common';
import { VolunteersContainerComponent } from './containers';
import { VolunteersPageComponent } from './pages';
import { VolunteersService, VolunteersWishFacadeService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerRoutingEnum } from './volunteers-routing.enum';
import { SharedModule } from '../../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ApiService } from '@core/services';

const routes: Routes = [
  {
    path: VolunteerRoutingEnum.Home,
    component: VolunteersPageComponent,
  },
];

@NgModule({
  declarations: [
    ListVolunteerComponent,
    VolunteersContainerComponent,
    VolunteersPageComponent,
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    ApiService,
    VolunteersService,
    VolunteersWishFacadeService,
  ],
})
export class VolunteersModule {}
