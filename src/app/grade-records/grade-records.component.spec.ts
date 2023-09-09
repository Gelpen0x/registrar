import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeRecordsComponent } from './grade-records.component';

describe('GradeRecordsComponent', () => {
  let component: GradeRecordsComponent;
  let fixture: ComponentFixture<GradeRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeRecordsComponent]
    });
    fixture = TestBed.createComponent(GradeRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
