import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Route, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-monitorstud',
  templateUrl: './monitorstud.component.html',
  styleUrls: ['./monitorstud.component.css'],
})
export class MonitorstudComponent {
  information: any;
  enrol_id: any;
  student: any;
  fname: any;
  email: any;
  middle: any;
  lname: any;
  contact_no: any;
  password: any;
  registrar: any;
  divshow: any = false;
  resetModal: any;

  constructor(private call: PostService, private route: Router) {}
  ngOnInit(): void {
    this.call.student1().subscribe((result: any) => {
      this.student = result;
    });
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });
  }
  onConfirm(sid: any, fname: any, middle: any, lname: any) {
    this.enrol_id = sid;
    this.fname = fname;
    this.middle = middle;
    this.lname = lname;
    this.divshow = true;
  }

  onDelete(flag: any) {
    if (flag == 1) {
      this.call.delStud(this.enrol_id).subscribe((result: any) => {
        this.student = result;
      });
    }
    this.divshow = false;
  }

  onModalHidden() {
    this.divshow = false;
  }
}
