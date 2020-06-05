import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  accountForm: FormGroup = new FormGroup({});
  submitted = false;
  formLength: number = 0;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loaduserAccount()

  }

  loaduserAccount() {
    this.authService.getUserAccount().subscribe(d => {
      this.formLength = Object.keys(this.accountForm.value).length;

      this.accountForm = this.formBuilder.group({
        fullName: new FormControl(d.data.name, [Validators.required]),
        company: new FormControl(d.data.company, [Validators.required]),
        title: new FormControl(d.data.title, [Validators.required]),
        mobileNumber: new FormControl(d.data.phone, [Validators.required, Validators.minLength(9)]),
        corporateEmail: new FormControl(d.data.email, [Validators.required, Validators.email]),
        city: new FormControl(d.data.country, [Validators.required])
      });

      this.formLength = Object.keys(this.accountForm.value).length;
    })
  }

  saveUserData() {
    this.submitted = true;
    if (this.accountForm.invalid) return false;

    this.authService.updateAccount(this.accountForm.value).subscribe(d => {
      this.authService.account = JSON.stringify(d.data);
      localStorage.setItem('account', this.authService.account);
      this.success = true;
    })
  }

}
