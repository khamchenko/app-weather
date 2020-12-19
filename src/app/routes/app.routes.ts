import { Routes } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not_found/not_found.component';

export const appRoutes: Routes = [

  { path: '', redirectTo: 'weather', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent,
    children: [
      {
          path: 'weather',
          component: WeatherComponent
      },
    ]
  },
  {
      path: '**',
      component: NotFoundComponent
  }
];
