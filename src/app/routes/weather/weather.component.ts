import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { AppDataService } from '../../services/app-data.service';

import { visibility } from '../../../layout/services/animations';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [DatePipe],
  animations: [visibility]
})

export class WeatherComponent implements OnInit {
  city;
  data_city;
  header_table = [
      {
          name: "Дата",
          description: "dt"
      },
      {
          name: "Температура (°C)",
          description: "main.temp"
      },
      {
          name: "Влажность (%)",
          description: "main.humidity"
      },
      {
          name: "Описание",
          description: "weather[0].description"
      },
      {
          name: "Скорость ветра (м/c)",
          description: "wind.speed"
      }
  ];
  
  errorMessage: string;
  param;

  constructor(private location: Location, private appDataService: AppDataService, private datePipe: DatePipe) {  }

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

      if (this.param.search) {
        this.city = this.param.search;

        this.appDataService.getForecast(this.city).subscribe(
          res => this.data_city = res,
          error => console.log(error)
        );
      }
    }
  }

  getForecast(city: string) {
    this.errorMessage = null;
    this.appDataService.getForecast(city).subscribe(
      res => this.data_city = res,
      error => console.log(error)
    );
  }
}
