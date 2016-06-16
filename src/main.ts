import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment,  } from './app/';
import { ThreeDayOutlookComponent } from './app/three-day-outlook/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
