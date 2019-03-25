import { Component, OnInit } from '@angular/core';
//
import { ArtistInfo } from './artist-info';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artists: ArtistInfo[] = [
    { src: 'r_andrea160.jpg', caption: 'Andrea Reys' },
    { src: 'r_clara160.jpg', caption: 'Brenda Bache' },
    { src: 'r_jen160.jpg', caption: 'Clara Stoneman' },
    { src: 'r_jordan160.jpg', caption: 'Dory Jensen' },
    { src: 'r_rey160.jpg', caption: 'Erica Marlay' },
    { src: 'r_sally160.jpg', caption: 'Fanny Dylan' }
  ];
  constructor() {}

  ngOnInit() {}
}
