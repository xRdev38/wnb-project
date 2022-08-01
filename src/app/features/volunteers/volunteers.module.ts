import { LOCALE_ID, NgModule } from '@angular/core';
import {
  AvatarVolunteerComponent,
  IdentityVolunteerComponent,
  InfoVolunteerComponent,
  ListVolunteerComponent,
} from './components';
import { CommonModule } from '@angular/common';
import { VolunteersContainerComponent } from './containers';
import { VolunteersPageComponent } from './pages';
import { VolunteersService, VolunteersWishFacadeService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerRoutingEnum } from './volunteers-routing.enum';

console.log('loading');
const routes: Routes = [
  {
    path: VolunteerRoutingEnum.Home,
    component: VolunteersPageComponent,
  },
];

@NgModule({
  declarations: [
    AvatarVolunteerComponent,
    IdentityVolunteerComponent,
    InfoVolunteerComponent,
    ListVolunteerComponent,
    VolunteersContainerComponent,
    VolunteersPageComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    VolunteersService,
    VolunteersWishFacadeService,
  ],
})
export class VolunteersModule {}
