import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  userInfo = {}

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loaduserAccount()
  }

  loaduserAccount() {
    this.authService.getUserAccount().subscribe(d => {
      this.userInfo = d.data;
      this.authService.account = JSON.stringify(d.data);
      localStorage.setItem('account', this.authService.account)
    })
  }

}
