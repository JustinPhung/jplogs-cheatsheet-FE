import {Component, OnInit, ViewChild} from '@angular/core';
import {log} from 'util';
import {ToDo} from '../toDo';
import {HttpTodoService} from '../http-todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  toDos: ToDo[] = [];
  displayToDos: ToDo[] = [];
  constructor(private httpToDoService: HttpTodoService) {
  }

  ngOnInit() {
    this.loadToDos();
  }

  loadToDos(): void {
    this.httpToDoService.getToDos().subscribe(
      success => {
        this.toDos = (<ToDo[]> success);
        this.displayToDos = this.toDos;
      },
      error => {
        log(error);
      }
    );
  }

  deleteToDo(toDo: ToDo): void {
    this.httpToDoService.deleteToDo(toDo).subscribe(
      () => {
        this.loadToDos();
      }, error => {
        log(error);
        this.loadToDos();
      }
    );
  }

  done(toDo: ToDo): void {
    log(toDo.name);
  }
}
