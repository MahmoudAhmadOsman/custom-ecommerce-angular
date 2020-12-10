import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreArrivalsComponent } from './store-arrivals.component';

describe('StoreArrivalsComponent', () => {
  let component: StoreArrivalsComponent;
  let fixture: ComponentFixture<StoreArrivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreArrivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
