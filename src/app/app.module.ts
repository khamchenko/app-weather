import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/layout.module';

import { WeatherComponent } from './routes/weather/weather.component';
import { MainComponent } from './routes/main/main.component';
import { NotFoundComponent } from './routes/not_found/not_found.component';

import { appRoutes } from './routes/app.routes';

import { AppDataService } from './services/app-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, LayoutModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule
  ],
  providers: [ AppDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
