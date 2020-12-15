import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  private api_key = environment.openweathermap.API_KEY;
  private url = environment.openweathermap.url;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(this.url)) {
      const paramReq = req.clone({
        params: req.params.set(
          'appid',
          this.api_key
        )
      });
      return next.handle(paramReq);
    } else {
      return next.handle(req);
    }

  }
}
