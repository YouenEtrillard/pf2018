import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Image } from 'angular2_photoswipe';

import { Work } from '../works/work';
import { WorksService } from '../works/works.service';
import { GalleryComponent } from 'angular2_photoswipe/lib/gallery/gallery.component';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {

  works: Work[];
  loc: string;
  work: Work;
  gallery: Array<any> = [];

  constructor(
    private location: Location,
    private worksService: WorksService
  ) {
    this.loc = location.path();
  }

  ngOnInit() {
    this.getWorks();
  }

  getWorks(): void {
    this.worksService.getWorks()
      .subscribe(response => {
        this.works = response;
        this.getWork();
      });
  }

  getWork() {
    this.work = this.works.find(item => item.url === this.loc.split('/').pop());

    if (this.work['pictures'] !== null && this.work['pictures'] !== '') {
      for (let j = 0; j < this.work['pictures'].length; j++) {
        const element = this.work['pictures'][j]['picture_id'];
        const img = new Image();
        img['largeUrl'] = element['data']['full_url'];
        img['width'] = element['width'];
        img['height'] = element['height'];
        img['id'] = j;
        img['size'] = `${img['width']}x${img['height']}`;
        img['thumbUrl'] = element['data']['thumbnails'][0]['url'];
        this.gallery.push(img);
      }
    }
  }
}
