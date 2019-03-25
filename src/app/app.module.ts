import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { PlayerComponent } from './player/player.component';
import { SongComponent } from './song/song.component';
import { SearchComponent } from './search/search.component';
//
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    PlayerComponent,
    SongComponent,
    SearchComponent,
    NavigationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
