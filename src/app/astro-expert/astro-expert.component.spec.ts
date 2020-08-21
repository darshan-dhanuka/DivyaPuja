import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroExpertComponent } from './astro-expert.component';

describe('AstroExpertComponent', () => {
  let component: AstroExpertComponent;
  let fixture: ComponentFixture<AstroExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
