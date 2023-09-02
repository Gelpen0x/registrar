import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedComponent } from './sched.component';

describe('SchedComponent', () => {
  let component: SchedComponent;
  let fixture: ComponentFixture<SchedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedComponent]
    });
    fixture = TestBed.createComponent(SchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
