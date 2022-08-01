import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import localeFr from '@angular/common/locales/fr';
import { AppModule } from './app/app.module';
import { environment } from '@environment';
import { registerLocaleData } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(localeFr, 'fr');

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
