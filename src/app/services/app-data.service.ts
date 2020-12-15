import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AppDataService {
  url = environment.openweathermap.url;
  constructor(private http: HttpClient) { }

  getForecast(search: string): Observable<any> {

    const url = `${this.url}?exclude=hourly,daily&lang=ru&units=metric&q=${search}`

    return this.http.get(url);
  }
}
