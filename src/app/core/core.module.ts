import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@core/services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
})
export class CoreModule {}
