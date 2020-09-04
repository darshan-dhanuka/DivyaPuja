import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftPoojaComponent } from './gift-pooja.component';

describe('GiftPoojaComponent', () => {
  let component: GiftPoojaComponent;
  let fixture: ComponentFixture<GiftPoojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftPoojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftPoojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
