import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent {
  passwordVisible: boolean = false;
  registrar: any;

  createTeacher = new FormGroup({
    fname: new FormControl(null),
    middle: new FormControl(null),
    lname: new FormControl(null),
    contact: new FormControl(null),
    positions: new FormControl(null),
    role: new FormControl(null),
    rights: new FormControl(null),
    email: new FormControl(null),
    pass: new FormControl(null),
  });
  constructor(
    private call: PostService,
    private http: HttpClient,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  saveTeacher() {
    this.call
      .createTeacher(this.createTeacher.value)
      .subscribe((result: any) => {
        this.createTeacher.reset(); // Reset form fields
        // window.location.reload(); // Reload the page
      });
  }
  confirm_order() {
    Swal.fire('Account ', 'Succesfully Added', 'success');
  }
}
