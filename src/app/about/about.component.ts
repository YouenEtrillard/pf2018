import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  mediumRes = '1080px';
  largeRes = '1920px';
  xLargeRes = '3440px';
  constructor() { }

  ngOnInit() {
  }

}
