import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartEditFormComponent } from './cart-edit-form.component';

describe('CartEditFormComponent', () => {
  let component: CartEditFormComponent;
  let fixture: ComponentFixture<CartEditFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
