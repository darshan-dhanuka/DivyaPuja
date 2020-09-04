import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookYatraComponent } from './book-yatra.component';

describe('BookYatraComponent', () => {
  let component: BookYatraComponent;
  let fixture: ComponentFixture<BookYatraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookYatraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookYatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
