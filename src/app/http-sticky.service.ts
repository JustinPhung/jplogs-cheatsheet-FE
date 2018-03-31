import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sticky} from './sticky';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpStickyService {
  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';

  public getStickys(): Observable<Object> {
    return this.http.get(this.configUrl);
  }

  public addSticky( model: Sticky ) {
    return this.http.put(this.configUrl, model).subscribe();
  }

  public editSticky( model: Sticky ) {
    return this.http.post(this.configUrl, model).subscribe();
  }
}
