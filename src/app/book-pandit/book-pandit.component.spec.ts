import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPanditComponent } from './book-pandit.component';

describe('BookPanditComponent', () => {
  let component: BookPanditComponent;
  let fixture: ComponentFixture<BookPanditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPanditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPanditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
