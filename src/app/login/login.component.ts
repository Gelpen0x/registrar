import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  passwordVisible: boolean = false;
  loginform = new FormGroup({
    user: new FormControl(null),
    pass: new FormControl(null),
  });
  divshow = false;
  constructor(private call: PostService, private route: Router) {}

  ngOnInit(): void {}
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  SaveFunct() {
    console.log(this.loginform.value);
    this.call.Login(this.loginform.value).subscribe((result: any) => {
      console.log(result);
      if (result.success) {
        this.route.navigate(['/side/home/approval']);
      } else {
        this.divshow = true;
      }
    });
  }
}
