import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/core/helpers/must-match.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm: FormGroup = new FormGroup({});
  submitted = false;
  success = false;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.passwordForm = this.formBuilder.group({
      current_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      re_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }, {
      validator: MustMatch('password', 're_password')
    });
  }

  ngOnInit() { }

  changePassword() {
    this.submitted = true;
    if (this.passwordForm.invalid) return false;

    this.authService.changePassword(this.passwordForm.get('current_password').value, this.passwordForm.get('password').value).subscribe(d => {
      this.success = true;
    }, error => this.error = 'Current Password Wrong'
    )
  }

}
