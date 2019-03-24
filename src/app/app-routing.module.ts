import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { MusicPlayerComponent } from './music-player/music-player.component';
import { ArtistComponent } from './artist/artist.component';
import { SongComponent } from './song/song.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'music', component: MusicPlayerComponent, data: {label: 'Home'} },
  { path: 'artist', component: ArtistComponent, data: {label: 'Artist'} },
  { path: 'song', component: SongComponent, data: {label: 'Song'} },
  { path: 'search', component: SearchComponent, data: {label: 'Search'} },
  { path: '', pathMatch: 'full', redirectTo: 'music' }
];
const routeOptions: ExtraOptions = {enableTracing: true};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
