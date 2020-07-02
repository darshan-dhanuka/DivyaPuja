import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TirthComponent } from './tirth.component';

describe('TirthComponent', () => {
  let component: TirthComponent;
  let fixture: ComponentFixture<TirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TirthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
