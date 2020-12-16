import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { PlayerComponent } from './player/player.component';
import { SongComponent } from './song/song.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'album',
    component: AlbumComponent,
    data: { label: 'Album', klass: 'fa fa-music' }
  },
  {
    path: 'artist',
    component: ArtistComponent,
    data: { label: 'Artist', klass: 'fa fa-user' }
  },
  {
    path: 'player',
    component: PlayerComponent,
    data: { label: 'Player', klass: 'fa fa-play' }
  },
  {
    path: 'song',
    component: SongComponent,
    data: { label: 'Song', klass: 'fa fa-list' }
  },
  {
    path: 'search',
    component: SearchComponent,
    data: { label: 'Search', klass: 'fa fa-search' }
  },
  { path: '', pathMatch: 'full', redirectTo: 'album' },
  { path: '**', component: PageNotFoundComponent }
];

// need useHash: true in order for this to work on Azure App Service
const routeOptions: ExtraOptions = {
    enableTracing: true,
    useHash: false,
    relativeLinkResolution: 'corrected',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
