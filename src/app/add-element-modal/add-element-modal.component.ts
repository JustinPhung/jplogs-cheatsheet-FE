import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Sticky} from '../sticky';
import {HttpStickyService} from '../http-sticky.service';
import {log} from 'util';

@Component({
  selector: 'app-add-element-modal',
  templateUrl: './add-element-modal.component.html',
  styleUrls: ['./add-element-modal.component.css']
})
export class AddElementModalComponent implements OnInit {

  closeResult: string;
  model: Sticky;
  @Output() added: EventEmitter<any> = new EventEmitter();


  constructor(private modalService: NgbModal, private httpStickyService: HttpStickyService) {}

  submitValues(): void {
    this.httpStickyService.addSticky(this.model).subscribe(
      () => {
        this.added.emit(null);
        },
      error => {
        log(error);
        this.added.emit(null);
      }
    );
    this.genNewSticky();
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
    this.genNewSticky();
  }

  private genNewSticky() {
    this.model = new Sticky(this.guid(), '', '', 'git', 0);
  }
  private guid() {
    return this._p8(false) + this._p8(true) + this._p8(true) + this._p8(false);
  }

  private _p8(s): string {
    const p = (Math.random().toString(16) + '000000000').substr(2, 8);
    return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p ;
  }
}
