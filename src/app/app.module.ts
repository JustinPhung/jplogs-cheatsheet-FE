import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AddElementModalComponent } from './add-element-modal/add-element-modal.component';
import {HttpStickyService} from './http-sticky.service';


@NgModule({
  declarations: [
    AppComponent,
    AddElementModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [HttpStickyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
