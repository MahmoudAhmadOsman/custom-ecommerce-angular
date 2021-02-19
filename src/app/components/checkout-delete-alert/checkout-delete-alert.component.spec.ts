import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckoutDeleteAlertComponent } from './checkout-delete-alert.component';

describe('CheckoutDeleteAlertComponent', () => {
  let component: CheckoutDeleteAlertComponent;
  let fixture: ComponentFixture<CheckoutDeleteAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutDeleteAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDeleteAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
