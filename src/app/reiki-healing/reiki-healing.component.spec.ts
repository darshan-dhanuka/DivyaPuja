import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReikiHealingComponent } from './reiki-healing.component';

describe('ReikiHealingComponent', () => {
  let component: ReikiHealingComponent;
  let fixture: ComponentFixture<ReikiHealingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReikiHealingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReikiHealingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
