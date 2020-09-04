import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAstroLearnComponent } from './e-astro-learn.component';

describe('EAstroLearnComponent', () => {
  let component: EAstroLearnComponent;
  let fixture: ComponentFixture<EAstroLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAstroLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAstroLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
