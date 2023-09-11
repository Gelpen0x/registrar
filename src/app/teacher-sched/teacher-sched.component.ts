import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-teacher-sched',
  templateUrl: './teacher-sched.component.html',
  styleUrls: ['./teacher-sched.component.css'],
})
export class TeacherSchedComponent {
  daysInSchedule: any;
  classSched: any;
  facultyName: any;
  faculty_id: any;
  timeSlots: any;
  teacher: any;
  gradeSec: any;
  constructor(private route: ActivatedRoute, private call: PostService) {}
  // ngOnInit(): void {
  //   this.call.schedule().subscribe((result: any) => {
  //     this.daysInSchedule = result;
  //   });
  //   this.call.schedule().subscribe((result: any) => {
  //     this.classSched = result;
  //   });
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const faculty_id = params['faculty_id'];
      const section_id = params['section_id'];
      const grade_level = params['grade_level'];
      const section_name = params['section_name'];

      this.call
        .scheduleTeacher(faculty_id, section_id)
        .subscribe((result: any) => {
          this.daysInSchedule = result;
          this.classSched = result;
          this.timeSlots = result;
          this.teacher = result;
          this.gradeSec = result;
        });
    });
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
