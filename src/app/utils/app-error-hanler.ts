import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppErrorHandler implements ErrorHandler {
  constructor(
    @Inject(Injector) private injector: Injector
  ) {}

  private get toastr(): ToastrService { return this.injector.get(ToastrService); }

  handleError(error: any): void {
    this.toastr.error(error.message, 'Error');
    throw error;
  }
}
