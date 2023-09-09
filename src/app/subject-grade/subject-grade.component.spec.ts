import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectGradeComponent } from './subject-grade.component';

describe('SubjectGradeComponent', () => {
  let component: SubjectGradeComponent;
  let fixture: ComponentFixture<SubjectGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectGradeComponent]
    });
    fixture = TestBed.createComponent(SubjectGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
