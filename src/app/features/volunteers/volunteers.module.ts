import { NgModule } from '@angular/core';
import {
  AvatarVolunteerComponent,
  IdentityVolunteerComponent,
  InfoVolunteerComponent,
  ListVolunteerComponent,
} from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AvatarVolunteerComponent,
    IdentityVolunteerComponent,
    InfoVolunteerComponent,
    ListVolunteerComponent,
  ],
  imports: [CommonModule],
})
export class VolunteersModule {}
