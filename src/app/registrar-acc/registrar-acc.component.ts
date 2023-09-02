import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registrar-acc',
  templateUrl: './registrar-acc.component.html',
  styleUrls: ['./registrar-acc.component.css'],
})
export class RegistrarAccComponent {
  facultyId = { faculty_id: localStorage.getItem('id') };
  registrar: any;
  passwordVisible: boolean = false;

  updateRegistrar = new FormGroup({
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
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });
    this.call.getfacultyReg().subscribe((result: any) => {
      this.registrar = result;
    });

    // this.call
    //   .getfacultyReg(this.facultyId.faculty_id)
    //   .subscribe((result: any) => {
    //     this.registrar = result;
    //     this.updateRegistrar.controls['fId'].setValue(
    //       this.registrar.faculty_id
    //     );
    //     this.updateRegistrar.controls['fname'].setValue(this.registrar.fname);
    //     this.updateRegistrar.controls['middle'].setValue(this.registrar.middle);
    //     this.updateRegistrar.controls['lname'].setValue(this.registrar.lname);
    //     this.updateRegistrar.controls['contact'].setValue(
    //       this.registrar.contact
    //     );
    //     this.updateRegistrar.controls['positions'].setValue(
    //       this.registrar.position
    //     );
    //     this.updateRegistrar.controls['role'].setValue(this.registrar.role);
    //     this.updateRegistrar.controls['rights'].setValue(this.registrar.rights);
    //     this.updateRegistrar.controls['email'].setValue(this.registrar.email);
    //     this.updateRegistrar.controls['pass'].setValue(this.registrar.password);
    //   });
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  update(faculty_id: any) {
    localStorage.setItem('id', faculty_id);
  }
  onupdateRegistrar() {
    this.call
      .updateRegistrar(this.updateRegistrar.value)
      .subscribe((result: any) => {
        window.location.reload();
      });
  }
}
