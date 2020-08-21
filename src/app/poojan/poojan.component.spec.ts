import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojanComponent } from './poojan.component';

describe('PoojanComponent', () => {
  let component: PoojanComponent;
  let fixture: ComponentFixture<PoojanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
