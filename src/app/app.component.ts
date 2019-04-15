import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WorksService } from './works/works.service';
import { AboutService } from './about/about.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'pf2018';

  constructor(
    private worksService: WorksService,
    private aboutService: AboutService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.worksService.getWorks()
        .subscribe(response => {});
      this.getItems('education');
      this.getItems('experience');
      this.getItems('skills');
      this.getItems('facts');
    }, 50);
  }

  getItems(param): void {
    this.aboutService.getItems(param)
      .subscribe(response => {});
  }
}
