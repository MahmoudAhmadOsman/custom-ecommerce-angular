import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddCreditcardComponent } from './add-creditcard.component';

describe('AddCreditcardComponent', () => {
  let component: AddCreditcardComponent;
  let fixture: ComponentFixture<AddCreditcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreditcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
