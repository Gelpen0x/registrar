import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  information: any;
  LRN: any;
  student: any;
  registrar: any;
  saveApproval: FormGroup;
  s: any;
  searchQuery: string = '';

  constructor(
    private fb: FormBuilder,
    private call: PostService,
    private route: Router
  ) {
    this.saveApproval = this.fb.group({
      approval: [''],
    });
  }
  ngOnInit(): void {
    this.call.student().subscribe((result: any) => {
      this.student = result;
    });
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });
  }
  updatestud(LRN: any) {
    localStorage.setItem('id', LRN);
  }
  saveApprove(LRN: any) {
    this.call.updatestud({ LRN: LRN }).subscribe((result: any) => {
      this.student = this.student.filter((s: any) => s.LRN !== LRN);
    });
  }
  searchStudents() {
    console.log('Search Query:', this.searchQuery);
    if (this.searchQuery.trim() !== '') {
      this.student = this.student.filter((i: any) =>
        i.fname.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      console.log('Filtered Students:', this.student);
    } else {
      console.log('Reloading Original Data');
      this.call.student1().subscribe((result: any) => {
        this.student = result;
      });
    }
  }
}
