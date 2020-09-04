import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VastuConsultantComponent } from './vastu-consultant.component';

describe('VastuConsultantComponent', () => {
  let component: VastuConsultantComponent;
  let fixture: ComponentFixture<VastuConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VastuConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VastuConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
