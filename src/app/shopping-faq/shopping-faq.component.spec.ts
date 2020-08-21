import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFaqComponent } from './shopping-faq.component';

describe('ShoppingFaqComponent', () => {
  let component: ShoppingFaqComponent;
  let fixture: ComponentFixture<ShoppingFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
