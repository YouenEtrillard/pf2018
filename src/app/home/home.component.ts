import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  initiated = true;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('oui');
    setTimeout(() => {
      this.initiated = false;
    }, 50);
  }

}
