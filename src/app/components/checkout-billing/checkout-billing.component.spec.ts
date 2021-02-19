import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckoutBillingComponent } from './checkout-billing.component';

describe('CheckoutBillingComponent', () => {
  let component: CheckoutBillingComponent;
  let fixture: ComponentFixture<CheckoutBillingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
