import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Diary} from './diary';


@Injectable()
export class HttpDiaryService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://jplogs.com:8080/diary/';

  public getDiaryEntries() {
     return this.http.get(this.configUrl + 'getDiaryEntries');
  }

  public addDiaryEntry( model: Diary ) {
    return this.http.put(this.configUrl + 'secure/addDiaryEntry', model);
  }

  public editDiaryEntry( model: Diary ) {
    return this.http.post(this.configUrl + 'secure/editDiaryEntry', model).subscribe();
  }

  public deleteDiaryEntrys( model: Diary ) {
    return this.http.delete(this.configUrl + 'secure/deleteDiaryEntry/' + model.uuid);
  }
}
