import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSchedComponent } from './teacher-sched.component';

describe('TeacherSchedComponent', () => {
  let component: TeacherSchedComponent;
  let fixture: ComponentFixture<TeacherSchedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherSchedComponent]
    });
    fixture = TestBed.createComponent(TeacherSchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
