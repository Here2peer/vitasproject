import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideInfoComponent } from './ride-info.component';

describe('RideInfoComponent', () => {
  let component: RideInfoComponent;
  let fixture: ComponentFixture<RideInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RideInfoComponent]
    });
    fixture = TestBed.createComponent(RideInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
