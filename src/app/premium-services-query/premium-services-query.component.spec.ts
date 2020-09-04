import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumServicesQueryComponent } from './premium-services-query.component';

describe('PremiumServicesQueryComponent', () => {
  let component: PremiumServicesQueryComponent;
  let fixture: ComponentFixture<PremiumServicesQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumServicesQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumServicesQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
