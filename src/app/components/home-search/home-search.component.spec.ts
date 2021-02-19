import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeSearchComponent } from './home-search.component';

describe('HomeSearchComponent', () => {
  let component: HomeSearchComponent;
  let fixture: ComponentFixture<HomeSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
