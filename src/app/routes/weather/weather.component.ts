import { Component, OnInit } from '@angular/core';
import { Location, DatePipe  } from '@angular/common';
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
  errorMessage: string;

  constructor(private location: Location, private appDataService: AppDataService, private datePipe: DatePipe) { }

  ngOnInit() {
    let param = location
      .search
      .replace('?', '')
      .split('&')
      .reduce((p, e) => {
        let a = e.split('=');
        p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
      },
        {});

    if (param) {
        this.city = param.search;

        this.appDataService.getForecast(this.city).subscribe(
            res => this.data_city = res
            error => console.log(res)
        );
    }
  }

  getForecast(city: string) {
      this.errorMessage = null;
      this.appDataService.getForecast(city).subscribe(
        res => this.data_city = res
        error => console.log(res)
      );
  }
}
