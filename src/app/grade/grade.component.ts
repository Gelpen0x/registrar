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
    });
  }
}
