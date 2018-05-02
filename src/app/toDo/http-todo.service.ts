import { Injectable } from '@angular/core';
import {ToDo} from './toDo';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpTodoService {

  constructor(private http: HttpClient) { }
  configUrl = 'http://jplogs.com:8080/todos/';

  public getToDos() {
    return this.http.get(this.configUrl + 'getToDos');
  }

  public addToDo( model: ToDo ) {
    return this.http.put(this.configUrl + 'secure/addToDo', model);
  }

  public editToDo( model: ToDo ) {
    return this.http.post(this.configUrl + 'secure/editToDo', model).subscribe();
  }

  public deleteToDo( model: ToDo ) {
    return this.http.delete(this.configUrl + 'secure/deleteToDo/' + model.uuid);
  }

}
