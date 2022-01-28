import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { FilmComponent } from './film/film.component';
import { CommunityComponent } from './community/community.component';
import { SportsComponent } from './sports/sports.component';
import { OutdoorsComponent } from './outdoors/outdoors.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TechComponent } from './tech/tech.component';
import { MusicComponent } from './music/music.component';
import { FetchData } from './fetch.component';
// import { FunctionComponent } from './fetch/functions.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    FilmComponent,
    NavbarComponent,
    CommunityComponent,
    SportsComponent,
    OutdoorsComponent,
    HomeComponent,
    NavbarComponent,
    TechComponent,
    MusicComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FetchData],
  bootstrap: [AppComponent],
})
export class AppModule {}
