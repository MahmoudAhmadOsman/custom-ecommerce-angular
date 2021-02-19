import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartAddNewAddressComponent } from './cart-add-new-address.component';

describe('CartAddNewAddressComponent', () => {
  let component: CartAddNewAddressComponent;
  let fixture: ComponentFixture<CartAddNewAddressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartAddNewAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddNewAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
