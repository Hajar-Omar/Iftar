import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IAccount } from 'src/app/core/interfaces/login';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  isLoggedIn = false;
  userInfo: IAccount;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(d => {
      this.isLoggedIn = d;
      this.userInfo = JSON.parse(localStorage.getItem('account'))
    })
  }

}
