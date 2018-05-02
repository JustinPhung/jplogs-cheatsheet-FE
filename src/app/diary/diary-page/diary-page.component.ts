import { Component, OnInit } from '@angular/core';
import {HttpDiaryService} from '../http-diary.service';
import {Diary} from '../diary';
import {UtilsService} from '../../utils.service';
import {ToDo} from '../../toDo/toDo';
import {log} from 'util';

@Component({
  selector: 'app-diary-page',
  templateUrl: './diary-page.component.html',
  styleUrls: ['./diary-page.component.css']
})
export class DiaryPageComponent implements OnInit {

  editorContent: String = '';
  diaryEntries: Diary [] = [];

  model = {
    year: 1991,
    month: 4,
    day: 15
  };

  configEdit = {
    heightMin: 500,
    heightMax: 6000,
    charCounterCount: false
  };

  constructor( private httpService: HttpDiaryService, private util: UtilsService ) { }

  ngOnInit() {
    this.setDateOnToday();
    this.httpService.getDiaryEntries().subscribe(
      success => {
        this.diaryEntries = (<Diary[]> success);
      },
      error => {
        log(error);
      }
    );
  }

  setDateOnToday() {
    const now = new Date();
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  modelDate(): String {
    return `${this.model.day}.${this.model.month}.${this.model.year}`;
  }

  onSubmit() {
    this.httpService.addDiaryEntry(new Diary( this.util.guid(), this.editorContent, this.modelDate(), '' )).subscribe(
      () => {
        this.setDateOnToday();
        this.editorContent = '';
      },
      error => {
        alert('Fehler beim Abspeichern');
      }
    );

  }
}
