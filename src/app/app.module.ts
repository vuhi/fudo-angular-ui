import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppErrorHandler } from './utils/app-error-hanler';

import { QuillModule } from 'ngx-quill';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline'],
          ['blockquote'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered'}, { list: 'bullet' }],
          [{ indent: '-1'}, { indent: '+1' }],
          [{ size: ['small', 'normal', 'large', 'huge'] }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ['clean']
        ]
      }
    }),
    PopoverModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 8000,
      preventDuplicates: true,
      toastClass: 'ngx-toastr custom-toastr'
    })
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
