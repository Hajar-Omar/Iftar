import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      fullName: new FormControl("", [Validators.required]),
      company: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      mobileNumber: new FormControl("", [Validators.required, Validators.minLength(9)]),
      corporateEmail: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      city: new FormControl("", [Validators.required]),
      keep_updated: new FormControl(false)
    });
  }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) return false;

    this.registerForm.get('keep_updated').setValue(this.registerForm.get('keep_updated').value === true ? 1 : 2)

    this.authService.register(this.registerForm.value).subscribe(d => {
      this.authService.loggedUser = JSON.stringify(d);
      this.authService.account = JSON.stringify(d.account);
      localStorage.setItem('loggedUser', this.authService.loggedUser);
      localStorage.setItem('account', this.authService.account);

      this.authService.isLoggedIn.next(true);
      if (this.authService.isLoggedIn) {
        this.authService.redirectUrl = "";
        this.router.navigate([this.authService.redirectUrl]);
      }
    })
  }

  ngOnInit() { }

}
