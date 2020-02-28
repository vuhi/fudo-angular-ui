import {ErrorHandler, Inject, Injectable, Injector, NgZone} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppErrorHandler implements ErrorHandler {
  constructor(
    @Inject(NgZone) private ngZone: NgZone,
    @Inject(Injector) private injector: Injector
  ) {}

  private get toastr(): ToastrService { return this.injector.get(ToastrService); }

  handleError(error: any): void {
    this.ngZone.run(() => {
      let message;
      switch (true) {
        case error instanceof HttpErrorResponse:
          message = error.error.message;
          break;
        case error instanceof Error:
          message = error.message;
          break;
        default:
          message = `unknown error throw: ${JSON.stringify(error)}`;
          break;
      }
      this.toastr.error(message, 'Error');
      throw error;
    });
  }
}
