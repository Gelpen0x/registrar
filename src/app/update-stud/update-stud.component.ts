import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-update-stud',
  templateUrl: './update-stud.component.html',
  styleUrls: ['./update-stud.component.css'],
})
export class UpdateStudComponent {
  studId = { LRN: localStorage.getItem('id') };
  passwordVisible: boolean = false;
  registrar: any;
  student: any;
  value: any;

  updateStud = new FormGroup({
    LRN: new FormControl(null),
    fname: new FormControl(null),
    middle: new FormControl(null),
    lname: new FormControl(null),
    contact: new FormControl(null),
    grade_level: new FormControl(null),
    birth: new FormControl(null),
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

    this.call.getstud(this.studId.LRN).subscribe((result: any) => {
      this.student = result;

      this.updateStud.controls['LRN'].setValue(this.student.LRN);
      this.updateStud.controls['fname'].setValue(this.student.fname);
      this.updateStud.controls['middle'].setValue(this.student.middle);
      this.updateStud.controls['lname'].setValue(this.student.lname);
      this.updateStud.controls['contact'].setValue(this.student.contact_no);
      this.updateStud.controls['grade_level'].setValue(
        this.student.grade_level
      );
      this.updateStud.controls['birth'].setValue(this.student.birthplace);
      this.updateStud.controls['email'].setValue(this.student.email);
      this.updateStud.controls['pass'].setValue(this.student.password);
    });
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  onupdateStud() {
    this.call.updateStud(this.updateStud.value).subscribe((result: any) => {
      if (result == 'ok') {
        window.location.reload();
        this.route.navigate(['/updateStud']);
      } else {
        console.log(result);
      }
    });
  }
}
