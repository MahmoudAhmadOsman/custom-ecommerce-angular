import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShopCategoryComponent } from './shop-category.component';

describe('ShopCategoryComponent', () => {
  let component: ShopCategoryComponent;
  let fixture: ComponentFixture<ShopCategoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
