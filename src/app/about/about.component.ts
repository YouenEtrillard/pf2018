import { Component, OnInit } from '@angular/core';


import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  xSmallRes = '800px';
  smallRes = '1080px';
  mediumRes = '1350px';
  largeRes = '2070px';
  xLargeRes = '3590px';

  infos = {
    'education': [],
    'experience': [],
    'skills': [],
    'facts': [],
  };

  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit() {
    this.getItems('education');
    this.getItems('experience');
    this.getItems('skills');
    this.getItems('facts');
  }

  getItems(param): void {
    this.aboutService.getItems(param)
      .subscribe(response => {
        this.infos[param] = response;
      });
  }

}
