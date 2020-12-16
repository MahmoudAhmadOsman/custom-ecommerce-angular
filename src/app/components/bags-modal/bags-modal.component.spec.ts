import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsModalComponent } from './bags-modal.component';

describe('BagsModalComponent', () => {
  let component: BagsModalComponent;
  let fixture: ComponentFixture<BagsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
