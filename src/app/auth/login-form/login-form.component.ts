import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  ishomePage: boolean;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private activeRoute: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
        // Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)
      ])
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) return false;

    this.authService.login(this.loginForm.get("email").value, this.loginForm.get("password").value).subscribe((d) => {
      this.authService.loggedUser = JSON.stringify(d);
      this.authService.account = JSON.stringify(d.account);
      localStorage.setItem('loggedUser', this.authService.loggedUser);
      localStorage.setItem('account', this.authService.account);

      this.authService.isLoggedIn.next(true);
      if (this.authService.isLoggedIn) {
        this.authService.redirectUrl = "";
        this.router.navigate([this.authService.redirectUrl]);
      }
    }, error => {
      this.error = error.error.title;
    });
  }

  ngOnInit() {
    this.ishomePage = this.activeRoute.snapshot.routeConfig.path === '' ? true : false;
  }

}
