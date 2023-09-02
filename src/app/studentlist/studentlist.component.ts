import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
})
export class StudentlistComponent {
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
    this.route.navigate(['/side/student/updateStud']);
  }
}
