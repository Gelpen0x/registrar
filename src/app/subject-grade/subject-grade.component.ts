import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-subject-grade',
  templateUrl: './subject-grade.component.html',
  styleUrls: ['./subject-grade.component.css'],
})
export class SubjectGradeComponent {
  teacher: any;
  gradeSec: any;
  studGrade: any;
  constructor(private route: ActivatedRoute, private call: PostService) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const faculty_id = params['faculty_id'];
      const section_id = params['section_id'];
      const subject_id = params['subject_id'];

      this.call
        .subjectGrade(faculty_id, section_id, subject_id)
        .subscribe((result: any) => {
          this.teacher = result;
          this.gradeSec = result;
          this.studGrade = result;
        });
    });
    //  this.call.subjectGrade().subscribe((result: any) => {
    //    this.studGrade = result;
    //  });
  }
  onPrintButtonClick() {
    // Add the print-specific stylesheet
    const style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    document.head.appendChild(style);
    window.print();
    style.remove();
  }
}
