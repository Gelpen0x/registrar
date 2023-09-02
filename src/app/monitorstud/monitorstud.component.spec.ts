import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorstudComponent } from './monitorstud.component';

describe('MonitorstudComponent', () => {
  let component: MonitorstudComponent;
  let fixture: ComponentFixture<MonitorstudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitorstudComponent]
    });
    fixture = TestBed.createComponent(MonitorstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
