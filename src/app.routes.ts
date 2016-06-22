import { provideRouter, RouterConfig } from "@angular/router";

import { ThreeDayOutlookComponent } from './app/three-day-outlook/three-day-outlook.component';

export const routes: RouterConfig = [
  {
    path: 'three-day-outlook', component: ThreeDayOutlookComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
