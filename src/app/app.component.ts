import {Component, OnInit, ViewChild} from '@angular/core';
import {Sticky} from './sticky/sticky';
import {HttpStickyService} from './sticky/http-sticky.service';
import {log} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }

}
