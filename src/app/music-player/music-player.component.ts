import { Component, OnInit } from '@angular/core';
import { ImageInfo } from '../image-info';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  images: ImageInfo[] = [
    {
      small: 'a_beach200.jpg',
      large: 'a_beach400.jpg',
      caption: 'On the Beach'
    },
    { small: 'a_girl200.jpg', large: 'a_girl400.jpg', caption: 'Young Hearts' },
    {
      small: 'a_paint200.jpg',
      large: 'a_paint400.jpg',
      caption: 'In the Corner'
    },
    {
      small: 'a_pink200.jpg',
      large: 'a_pink400.jpg',
      caption: 'Pretty in Pink'
    },
    { small: 'a_sad200.jpg', large: 'a_sad400.jpg', caption: 'Reflections' },
    { small: 'a_rain200.jpg', large: 'a_rain400.jpg', caption: 'Looking Up' },
    {
      small: 'a_search200.jpg',
      large: 'a_search400.jpg',
      caption: 'Looking for You'
    },
    { small: 'a_wheel200.jpg', large: 'a_wheel400.jpg', caption: 'Riding Away' }
  ];
  constructor() {}

  ngOnInit() {}
}
