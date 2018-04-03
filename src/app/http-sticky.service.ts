import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sticky} from './sticky';

@Injectable()
export class HttpStickyService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://jplogs.com:8080/stickies/';

  public getStickys() {
     return this.http.get(this.configUrl + 'getStickies');
  }

  public addSticky( model: Sticky ) {
    return this.http.put(this.configUrl + 'addSticky', model);
  }

  public editSticky( model: Sticky ) {
    return this.http.post(this.configUrl + 'editSticky', model).subscribe();
  }

  public deleteSticky( model: Sticky ) {
    return this.http.delete(this.configUrl + 'deleteSticky/' + model.uuid);
  }
}
