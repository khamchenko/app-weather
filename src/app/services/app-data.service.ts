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
    const url = `${this.url}/forecast?exclude=daily&lang=ru&units=metric&q=${search}`

    return this.http.get(url);
  }
  getOneCall(lat: string, lon: string): Observable<any> {
    const url = `${this.url}/onecall?lat=${lat}&lon=${lon}&lang=ru&units=metric`

    return this.http.get(url);
  }
}
