import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { MusicComponent } from './music/music.component';
import { FilmComponent } from './film/film.component';
import { TechComponent } from './tech/tech.component';
import { CommunityComponent } from './community/community.component';
import { SportsComponent } from './sports/sports.component';
import { OutdoorsComponent } from './outdoors/outdoors.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    MusicComponent,
    TechComponent,
    FilmComponent,
    // routingComponents,
    NavbarComponent,
    CommunityComponent,
    SportsComponent,
    OutdoorsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
