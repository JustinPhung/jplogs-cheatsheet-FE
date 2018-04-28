import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpStickyService} from '../http-sticky.service';
import {Sticky} from '../sticky';
import {log} from 'util';

@Component({
  selector: 'app-sticky-page',
  templateUrl: './sticky-page.component.html',
  styleUrls: ['./sticky-page.component.css']
})
export class StickyPageComponent implements OnInit {

  @ViewChild('searchControl') searchControl;
  stickies: Sticky[] = [];
  displayStickies: Sticky[] = [];
  categories = new Set<String>();

  constructor(private httpStickyService: HttpStickyService) {
  }

  ngOnInit() {
    this.loadStickies();
  }

  loadStickies(): void {
    this.httpStickyService.getStickys().subscribe(
      success => {
        this.stickies = (<Sticky[]> success);
        this.displayStickies = this.stickies;
        this.categories = new Set<String>()
        this.stickies.forEach(sticky => this.categories.add(sticky.category) );
      },
      error => {
        log(error);
      }
    );
  }

  deleteSticky(sticky: Sticky): void {
    this.httpStickyService.deleteSticky(sticky).subscribe(
      () => {
        this.loadStickies();
      }, error => {
        log(error);
        this.loadStickies();
      }
    );
  }

  filterByCategory(category: string): void {
    this.displayStickies = this.stickies.filter(sticky =>
      sticky.category === category
    );
  }

  public search(value: string): void {
    if ( value !== undefined) {
      this.displayStickies = this.stickies.filter(sticky => {
        return sticky.copyText.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
          sticky.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
      });
    }
  }

}
