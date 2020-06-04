import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        // Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)
      ])
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) return false;

    this.authService.login(this.loginForm.get("email").value, this.loginForm.get("password").value).subscribe((d) => {
      this.authService.loggedUser = JSON.stringify(d);
      localStorage.setItem('loggedUser', this.authService.loggedUser)
      console.log(d)
      // let username = this.loginForm.get("email").value;
      // this.authService.useremail = username.substring(0, username.indexOf("@"));
      this.authService.isLoggedIn = true;
      if (this.authService.isLoggedIn) {
        this.authService.redirectUrl = "";
        this.router.navigate([this.authService.redirectUrl]);
      }
    });
  }

  ngOnInit() { }

}
