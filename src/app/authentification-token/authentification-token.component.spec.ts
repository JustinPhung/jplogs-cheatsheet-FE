import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationTokenComponent } from './authentification-token.component';

describe('AuthentificationTokenComponent', () => {
  let component: AuthentificationTokenComponent;
  let fixture: ComponentFixture<AuthentificationTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
