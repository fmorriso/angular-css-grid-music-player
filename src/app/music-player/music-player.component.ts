import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  images: ImageInfo[] = [
    {small: 'a_girl200.jpg', large: 'a_girl400.jpg'},
    {small: 'a_paint200.jpg', large: 'a_paint400.jpg'}
  ];
  constructor() { }

  ngOnInit() { }

}
