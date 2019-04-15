import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Work } from './work';
import { WorksService } from './works.service';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works: Work[];

  constructor(
    private worksService: WorksService
  ) { }

  ngOnInit() {
    this.getWorks();
  }

  getWorks(): void {
    this.worksService.getWorks()
    .subscribe(response => {
      this.works = response;
    });
  }
}
