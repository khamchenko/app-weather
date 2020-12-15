import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import configUrl from '../config.json';

@Injectable()
export class AppDataService {
  private api_key = "e0b310fe6e568aec9702b17c83efd8d2";
  url = configUrl.openweathermap.url;
  constructor(private http: HttpClient) { }

  getForecast(search: string): Observable<any> {
    const url = `${this.url}?exclude=hourly,daily&lang=ru&units=metric&q=${search}&appid=${this.api_key}`

    return this.http.get(url);
  }
}
