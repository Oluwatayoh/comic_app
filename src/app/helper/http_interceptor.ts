import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  catchError,
  finalize,
  map,
  Observable,
  Subscription,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class IntelliveerHTTPInterceptor implements HttpInterceptor {
  constructor(
  ) {}
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var API_KEY = {
      auth: {
        type: 'apiKey',
        apiKey: environment.api_key,
      },
    };
    const req = httpRequest.clone({
      headers: httpRequest.headers.set('Accept', 'application/json'),
      body: { ...httpRequest.body, ...API_KEY },
    });
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
          // this.errorDialogService.openDialog(event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason:
            error && error.error && error.error.reason
              ? error.error.reason
              : '',
          status: error.status,
        };
        return throwError(error);
      })
    );
  }
}