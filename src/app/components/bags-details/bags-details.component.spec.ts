import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BagsDetailsComponent } from './bags-details.component';

describe('BagsDetailsComponent', () => {
  let component: BagsDetailsComponent;
  let fixture: ComponentFixture<BagsDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
