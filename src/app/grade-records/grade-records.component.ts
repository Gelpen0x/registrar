import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grade-records',
  templateUrl: './grade-records.component.html',
  styleUrls: ['./grade-records.component.css'],
})
export class GradeRecordsComponent {
  registrar: any;
  gradesStud: any;
  groupedGrades: any[] = []; // New array to store grouped data

  constructor(
    private fb: FormBuilder,
    private call: PostService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });

    this.call.gradesStud().subscribe((result: any) => {
      this.gradesStud = result;
      this.groupByGradeAndSection(); // Call the grouping function
    });
  }

  // Function to group gradesStud data by grade level and section
  groupByGradeAndSection() {
    this.groupedGrades = [];
    this.gradesStud.forEach((grade: any) => {
      const existingGroup = this.groupedGrades.find(
        (group) =>
          group.section_id === grade.section_id &&
          group.grade === grade.grade &&
          group.section_name === grade.section_name
      );

      if (existingGroup) {
        existingGroup.values.push(grade);
      } else {
        this.groupedGrades.push({
          section_id: grade.section_id,
          grade: grade.grade,
          section_name: grade.section_name,
          values: [grade],
        });
      }
    });
  }

  // getTeacher(faculty_id: any) {
  //   localStorage.setItem('id', faculty_id);
  //   this.route.navigate(['/side/grade/teacherSched']);
  // }
  getTeacher(faculty_id: any, section_id: any) {
    this.route.navigate([
      '/side/grade/teacherSched',
      {
        faculty_id: faculty_id,
        // grade: grade,
        // section_name: section_name,
        section_id: section_id,
      },
    ]);
  }

  getSubject(faculty_id: any, section_id: any, subject_id: any) {
    this.route.navigate([
      '/side/grade/subjectGrade',
      {
        faculty_id: faculty_id,
        // grade: grade,
        // section_name: section_name,
        section_id: section_id,
        subject_id: subject_id,
      },
    ]);
  }
}
