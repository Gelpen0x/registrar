import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  enrolledStud: any;
  registrar: any;

  constructor(private call: PostService, private route: Router) {}
  ngOnInit(): void {
    this.call.enrolled().subscribe((result: any) => {
      this.enrolledStud = result;
    });
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });
  }
  updatestud(LRN: any) {
    localStorage.setItem('id', LRN);
    this.route.navigate(['/updateStud']);
  }
}
