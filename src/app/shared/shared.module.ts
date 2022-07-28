import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components';
import { NavFilterComponent } from './components';
import { ProgressBarComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [CardComponent, NavFilterComponent, ProgressBarComponent],
  exports: [CardComponent, NavFilterComponent, ProgressBarComponent],
})
export class SharedModule {}
