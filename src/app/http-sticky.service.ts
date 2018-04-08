import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sticky} from './sticky';
import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class HttpStickyService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:8080/stickies/';

  public getStickys() {
     return this.http.get(this.configUrl + 'getStickies');
  }

  public addSticky( model: Sticky ) {
    return this.http.put(this.configUrl + 'secure/addSticky', model);
  }

  public editSticky( model: Sticky ) {
    return this.http.post(this.configUrl + 'secure/editSticky', model).subscribe();
  }

  public deleteSticky( model: Sticky ) {
    return this.http.delete(this.configUrl + 'secure/deleteSticky/' + model.uuid);
  }

  getAuthenticationToken( key: string ) {
    return this.http.post( this.configUrl +  'authenticate', Md5.hashStr(key), {responseType: 'text'});
  }
}
