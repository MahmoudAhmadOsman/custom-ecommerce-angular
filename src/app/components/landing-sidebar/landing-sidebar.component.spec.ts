import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSidebarComponent } from './landing-sidebar.component';

describe('LandingSidebarComponent', () => {
  let component: LandingSidebarComponent;
  let fixture: ComponentFixture<LandingSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
