import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.css'],
})
export class UpdateteacherComponent {
  facultyId = { faculty_id: localStorage.getItem('id') };
  fname: any;
  middle: any;
  lname: any;
  teachers: any;
  registrar: any;

  updateTeacher = new FormGroup({
    fId: new FormControl(null),
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
    private route: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.call.teachers().subscribe((result) => {
      this.teachers = result;
    });
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });

    // this.call.getfaculty(this.facultyId.faculty_id).subscribe((result: any) => {
    //   this.teachers = result;
    //   this.updateTeacher.controls['fId'].setValue(this.teachers.faculty_id);
    //   this.updateTeacher.controls['fname'].setValue(this.teachers.fname);
    //   this.updateTeacher.controls['middle'].setValue(this.teachers.middle);
    //   this.updateTeacher.controls['lname'].setValue(this.teachers.lname);
    //   this.updateTeacher.controls['contact'].setValue(this.teachers.contact);
    //   this.updateTeacher.controls['email'].setValue(this.teachers.email);
    //   this.updateTeacher.controls['pass'].setValue(this.teachers.password);
    // });
  }
  editTeacher(teacher: any) {
    this.updateTeacher.patchValue({
      fId: teacher.faculty_id,
      fname: teacher.fname,
      middle: teacher.middle,
      lname: teacher.lname,
      contact: teacher.contact,
      positions: teacher.position,
      role: teacher.role,
      rights: teacher.rights,
      email: teacher.email,
      pass: teacher.password,
    });
  }
  update(faculty_id: any) {
    localStorage.setItem('id', faculty_id);
  }
  onupdateTeacher() {
    this.call
      .updateTeacher(this.updateTeacher.value)
      .subscribe((result: any) => {
        window.location.reload();
      });
  }
}
