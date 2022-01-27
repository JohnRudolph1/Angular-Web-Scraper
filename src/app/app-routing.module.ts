import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { MusicComponent } from './music/music.component';
import { FilmComponent } from './film/film.component';
import { OutdoorsComponent } from './outdoors/outdoors.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'all', component: EventsComponent },
  { path: 'music', component: MusicComponent },
  { path: 'film', component: FilmComponent },
  { path: 'outdoors', component: OutdoorsComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'tech', component: TechComponent },
  { path: 'community', component: CommunityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponents = [HomeComponent, EventsComponent, MusicComponent,OutdoorsComponent, SportsComponent, TechComponent, CommunityComponent ]
