import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home/home.service';
import { ISetting } from 'src/app/core/interfaces/setting';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  event: ISetting;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadSetting();
  }

  loadSetting() {
    this.homeService.getSettings().subscribe(d => {
      this.event = d;
    })
  }

}
