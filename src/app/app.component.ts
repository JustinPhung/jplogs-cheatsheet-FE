import {Component, OnInit, ViewChild} from '@angular/core';
import {Sticky} from './sticky';
import {HttpStickyService} from './http-sticky.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('searchControl') searchControl;
  stickys: Sticky[] = [];

  constructor(private httpStickyService: HttpStickyService) {

  }


  ngOnInit() {
    this.httpStickyService.getStickys();
  }

  public search(value: string): void {
    if ( value !== undefined) {
       console.log(value);
    }
  }
}
