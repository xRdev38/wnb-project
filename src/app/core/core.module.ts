import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, LoaderInterceptor } from '@core/services';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class CoreModule {}
