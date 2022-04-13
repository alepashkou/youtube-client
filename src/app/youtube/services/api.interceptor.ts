import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private readonly apiToken = 'AIzaSyAwQPOShnGHYLbnybadYKE7kbv1_93ll8I';

  private readonly baseUrl = 'https://youtube.googleapis.com/youtube/v3/';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({
      url: this.baseUrl + request.url,
      params: request.params.set('key', this.apiToken)
        .append('part', 'snippet')
        .append('maxResults', '20'),
    });
    return next.handle(clonedRequest);
  }
}
