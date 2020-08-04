import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroSignComponent } from './astro-sign.component';

describe('AstroSignComponent', () => {
  let component: AstroSignComponent;
  let fixture: ComponentFixture<AstroSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
