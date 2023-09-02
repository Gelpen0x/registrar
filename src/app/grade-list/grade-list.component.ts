import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css'],
})
export class GradeListComponent {
  registrar: any;
  constructor(private call: PostService, private route: Router) {}
  ngOnInit(): void {
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });
  }
}
