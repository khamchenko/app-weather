import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';

import { AppDataService } from '../../services/app-data.service';
import { HeaderService } from '../../../layout/services/header.service';
import { SnackService } from '../../../layout/services/snack.service';

import { WeatherHeaderItems } from './header.table';

import { visibility } from '../../../layout/services/animations';
import _ from "lodash";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [DatePipe],
  animations: [visibility]
})

export class WeatherComponent implements OnInit {
  city;
  current_weather;
  daily_weather;
  caption = "Прогноз на следующие 5 дней";
  header_table = WeatherHeaderItems;
  errorMessage: string;
  param;

  constructor(private location: Location, private appDataService: AppDataService, private datePipe: DatePipe, private headerService: HeaderService, private snackService: SnackService) {
  }

  ngOnInit() {
    if (location.search) {
      this.param = location
        .search
        .replace('?', '')
        .split('&')
        .reduce((p, e) => {
          let a = e.split('=');
          p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
          return p;
        },
          {});

      if (this.param)
        if (this.param.search) {
          this.city = this.param.search;

          this.getForecast(this.city);
        }
    }
  }

  getForecast(city: string) {
    this.errorMessage = null;

    this.location.replaceState(location.pathname, `?search=${city}`);
    this.city = city;

    this.appDataService.getForecast(city).subscribe(
      res => {
        let lat = res.city.coord.lat;
        let lon = res.city.coord.lon;

        this.getOneCall(lat, lon);
      },
      err => {
        this.snackService.addItem({
          error: err.error.cod,
          message: err.error.message,
          imageFile: "src/imgs/icon_stauts_err.svg",
          alt: "error",
          type: "error"
        });
      }
    );
  }

  getOneCall(lat, lon) {
    this.errorMessage = null;

    this.appDataService.getOneCall(lat, lon).subscribe(
      res => {
        let currentTimeZone = new Date().getTimezoneOffset() * 60;

        let sunrise = new Date((res.current.sunrise + res.timezone_offset + currentTimeZone) * 1000);

        let sunset = new Date((res.current.sunset + res.timezone_offset + currentTimeZone) * 1000);

        this.current_weather = {
          ...res.current,
          timezone: res.timezone_offset,
          sunrise,
          sunset
        };

        this.daily_weather = _.map(res.daily, (elem) => {

          let sunrise = new Date((elem.sunrise + res.timezone_offset + currentTimeZone) * 1000);

          let sunset = new Date((elem.sunset + res.timezone_offset + currentTimeZone) * 1000);

          return {
            ...elem,
            sunrise,
            sunset,
            active: false
          }
        })
      },
      error => {
        console.log(error);
      }
    )
  }
}
