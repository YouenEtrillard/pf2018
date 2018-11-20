import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  mediumRes = '1350px';
  largeRes = '2070px';
  xLargeRes = '3590px';

  constructor() { }

  ngOnInit() {
  }

}
