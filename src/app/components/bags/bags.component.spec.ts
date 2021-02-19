import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BagsComponent } from './bags.component';

describe('BagsComponent', () => {
  let component: BagsComponent;
  let fixture: ComponentFixture<BagsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
