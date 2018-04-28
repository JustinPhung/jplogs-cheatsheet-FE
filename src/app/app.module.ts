import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AddElementModalComponent } from './sticky/add-element-modal/add-element-modal.component';
import {HttpStickyService} from './sticky/http-sticky.service';
import { AuthentificationTokenComponent } from './authentification-token/authentification-token.component';
import {AuthInterceptor} from './auth-interceptor';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import {RouterModule, Routes} from '@angular/router';
import { TodoPageComponent } from './toDo/todo-page/todo-page.component';
import { DiaryPageComponent } from './diary/diary-page/diary-page.component';
import { StickyPageComponent } from './sticky/sticky-page/sticky-page.component';
import { AddTodoModalComponent } from './toDo/add-todo-modal/add-todo-modal.component';
import {HttpTodoService} from './toDo/http-todo.service';
import {UtilsService} from './utils.service';

const appRoutes: Routes = [
  { path: 'todo', component: TodoPageComponent },
  { path: 'diary', component: DiaryPageComponent },
  { path: '**', component: StickyPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddElementModalComponent,
    AuthentificationTokenComponent,
    MenuButtonComponent,
    TodoPageComponent,
    DiaryPageComponent,
    StickyPageComponent,
    AddTodoModalComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [HttpStickyService,
    HttpTodoService,
    UtilsService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
