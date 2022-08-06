import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  AvatarVolunteerComponent,
  BaseComponent,
  CardComponent,
  IdentityVolunteerComponent,
  InfoVolunteerComponent,
  NavFilterComponent,
  ProgressBarComponent,
  SpinnerComponent,
} from './components';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    BaseComponent,
    CardComponent,
    AvatarVolunteerComponent,
    IdentityVolunteerComponent,
    InfoVolunteerComponent,
    NavFilterComponent,
    ProgressBarComponent,
    SpinnerComponent,
    FilterComponent,
  ],
  exports: [
    BaseComponent,
    CardComponent,
    AvatarVolunteerComponent,
    IdentityVolunteerComponent,
    InfoVolunteerComponent,
    NavFilterComponent,
    ProgressBarComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
