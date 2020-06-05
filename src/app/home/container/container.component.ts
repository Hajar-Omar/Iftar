import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ILogin } from 'src/app/core/interfaces/login';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  isLoggedIn = false;
  userInfo: ILogin;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(d => {
      this.isLoggedIn = d;
      console.log(localStorage.getItem('loggedUser'))
      console.log(typeof localStorage.getItem('loggedUser'))
      console.log(typeof JSON.parse(localStorage.getItem('loggedUser')))
      this.userInfo = JSON.parse(localStorage.getItem('loggedUser'))
    })
  }

}
