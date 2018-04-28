import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {log} from 'util';
import {ToDo} from '../toDo';
import {HttpTodoService} from '../http-todo.service';
import {UtilsService} from '../../utils.service';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.css']
})
export class AddTodoModalComponent implements OnInit {

  closeResult: string;
  model: ToDo;
  @Output() added: EventEmitter<any> = new EventEmitter();


  constructor(private modalService: NgbModal,
              private httpToDoService: HttpTodoService,
              private util: UtilsService) {}

  submitValues(): void {
    this.httpToDoService.addToDo(this.model).subscribe(
      () => {
        this.added.emit(null);
      },
      error => {
        log(error);
        this.added.emit(null);
      }
    );
    this.genNewToDo();
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
    this.genNewToDo();
  }

  private genNewToDo() {
    this.model = new ToDo(this.util.guid(), '', '',  0);
  }


}
