import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopDetailsComponent } from './stop-details.component';

describe('StopDetailsComponent', () => {
  let component: StopDetailsComponent;
  let fixture: ComponentFixture<StopDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopDetailsComponent]
    });
    fixture = TestBed.createComponent(StopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
