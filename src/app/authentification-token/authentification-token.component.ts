import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpStickyService} from '../http-sticky.service';

@Component({
  selector: 'app-authentification-token',
  templateUrl: './authentification-token.component.html',
  styleUrls: ['./authentification-token.component.css']
})
export class AuthentificationTokenComponent implements OnInit {

  hasToken: boolean;

  constructor(private httpStickyService: HttpStickyService) {
    const token = localStorage.getItem('token');
    if (token) {
      this.hasToken = true;
    }
  }

  ngOnInit() {
  }

  submitKey(value: string) {
    if ( value !== undefined) {
      this.httpStickyService.getAuthenticationToken(value)
        .subscribe(
        token => {
          localStorage.setItem('token', token);
          this.hasToken = true;
        }, error => {
          console.log(error);
      });
    }
  }
}
