import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from '@core/core.module';
import { OverlayService } from '@core/services';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }, OverlayService],
  bootstrap: [AppComponent],
})
export class AppModule {}
