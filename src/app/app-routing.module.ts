import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MusicPlayerComponent } from './music-player/music-player.component';

const routes: Routes = [
  { path: 'music', component: MusicPlayerComponent },
  { path: '', pathMatch: 'full', redirectTo: 'music' }
];
const routeOptions: ExtraOptions = {enableTracing: true};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
