import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css'],
})
export class GradeComponent {
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
          group.grade_level === grade.grade_level &&
          group.section_name === grade.section_name
      );

      if (existingGroup) {
        existingGroup.values.push(grade);
      } else {
        this.groupedGrades.push({
          grade_level: grade.grade_level,
          section_name: grade.section_name,
          values: [grade],
        });
      }
    });
  }
}
