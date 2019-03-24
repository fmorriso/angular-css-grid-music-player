import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { MusicPlayerComponent } from './music-player/music-player.component';
import { ArtistComponent } from './artist/artist.component';
import { SongComponent } from './song/song.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'player', component: MusicPlayerComponent, data: {label: 'Player', klass: 'fa fa-music'} },
  { path: 'artist', component: ArtistComponent, data: {label: 'Artist', klass: 'fa fa-user'} },
  { path: 'song', component: SongComponent, data: {label: 'Song', klass: 'fa fa-list'} },
  { path: 'search', component: SearchComponent, data: {label: 'Search', klass:'fa fa-search'} },
  { path: '', pathMatch: 'full', redirectTo: 'player' },
  { path: '**', component: PageNotFoundComponent }
];
const routeOptions: ExtraOptions = {enableTracing: true};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
