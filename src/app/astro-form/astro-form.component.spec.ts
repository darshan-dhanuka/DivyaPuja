import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroFormComponent } from './astro-form.component';

describe('AstroFormComponent', () => {
  let component: AstroFormComponent;
  let fixture: ComponentFixture<AstroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
