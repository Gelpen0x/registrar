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
    // Get the faculty_id from the route parameters
    this.route.params.subscribe((params) => {
      const faculty_id = params['faculty_id'];
      const section_id = params['section_id'];
      const grade_level = params['grade_level'];
      const section_name = params['section_name'];

      // Pass the faculty_id as an argument to the schedule method
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
    window.print();
  }
}
