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

  facts = [
    {
      'img': 'assets/images/my-passeport.jpg',
      'title': 'I try to travel to a new place at least once a year',
      'text': '3 countries in 2018, including Ireland that I already visited a few years ago'
    },
    {
      'svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.82 195.68"><defs><style>.cls-1{font-size:172px;font-family:TimesNewRomanPSMT, Times New Roman;}</style></defs><title>youen-phonetic</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><text class="cls-1" transform="translate(13.24 142.94)">juːn</text></g></g></svg>',
      'title': 'I won\'t get mad if you mispronounce my name',
      'text': 'I would be more surprised if you get it right reading it for the first time'
    },
    {
      'img': 'assets/images/passeport.png',
      'title': 'I really enjoy playing video and board games with friends',
      'text': 'Mostly team games where you have to achieve victory over the game itself or other teams'
    },
    {
      'img': 'assets/images/passeport.png',
      'title': 'I come from a family of teacher',
      'text': 'How is that relevant you might wonder. I believe it\'s partly responsible for how curious and willing to understand "why" I am'
    },
    {
      'img': 'assets/images/passeport.png',
      'title': 'Sometimes I\'m funny',
      'text': 'A friend once said that about me, I found it pretty accurate'
    },
    {
      'img': 'assets/images/passeport.png',
      'title': 'I just love my warm cup in the morning',
      'text': 'Or in the evening, or in between. But I always have to wait since I can\'t drink when it\'s too hot'
    },
    {
      'img': 'assets/images/passeport.png',
      'title': 'That\'s my headset',
      'text': 'It lets me bring my world with me everywhere I go (with spotify to help)'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
