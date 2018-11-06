import { Component, OnInit, Input } from '@angular/core';
import { isContentQueryHost } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.scss']
})
export class CustomIconComponent implements OnInit {
  @Input() icon;
  iconLink: string;

  constructor() { }

  ngOnInit() {
    if (this.icon) {
      this.iconLink = `#${this.icon}`;
      console.log(this.iconLink);
    }
  }

}
