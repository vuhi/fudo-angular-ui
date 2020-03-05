import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// import { AuthService } from '../../services';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class Interceptor implements HttpInterceptor  {

  constructor(
    private router: Router,
    // private authService: AuthService,
    private toastr: ToastrService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'MOCK TOKEN';
    // if (token) {
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   });
    // }

    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    // message = error.status === 0 ? 'status code 0 throw. unable to connect to api endpoint.' : error.error.message;

    return next.handle(req);
  }
}
