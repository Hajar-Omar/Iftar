import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IAccount } from 'src/app/core/interfaces/login';
import { HomeService } from 'src/app/core/services/home/home.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  isLoggedIn = false;
  userInfo: IAccount;
  agenda = [];
  speaker = '';

  constructor(private authService: AuthService, private homeService: HomeService) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(d => {
      this.isLoggedIn = d;
      this.userInfo = JSON.parse(localStorage.getItem('account'))
    })

    this.loadSetting();
  }

  loadSetting() {
    this.agenda = []
    this.homeService.getSettings().subscribe(d => {
      this.speaker = d.setting.speaker;
      this.agenda.push(...d.agenda)
    })
  }

}
