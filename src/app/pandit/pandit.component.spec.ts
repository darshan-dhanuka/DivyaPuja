import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanditComponent } from './pandit.component';

describe('PanditComponent', () => {
  let component: PanditComponent;
  let fixture: ComponentFixture<PanditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
