import { Component, OnInit } from '@angular/core';
import { faWindows } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-main-cointainer',
  templateUrl: './main-cointainer.component.html',
  styleUrls: ['./main-cointainer.component.scss']
})
export class MainCointainerComponent implements OnInit {

  faWindows = faWindows;

  constructor() { }

  ngOnInit() {
  }

}
