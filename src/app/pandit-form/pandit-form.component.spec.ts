import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanditFormComponent } from './pandit-form.component';

describe('PanditFormComponent', () => {
  let component: PanditFormComponent;
  let fixture: ComponentFixture<PanditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
