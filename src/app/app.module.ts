import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AddElementModalComponent } from './add-element-modal/add-element-modal.component';
import {HttpStickyService} from './http-sticky.service';
import { AuthentificationTokenComponent } from './authentification-token/authentification-token.component';
import {AuthInterceptor} from './auth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AddElementModalComponent,
    AuthentificationTokenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [HttpStickyService,     {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
