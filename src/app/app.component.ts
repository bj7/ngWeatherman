import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
Route([
  {path: '/three-day-outlook', name: 'ThreeDayOutlook', component: ThreeDayOutlookComponent}
])
export class AppComponent {
  title = 'Welcome to Weatherman!';
}
