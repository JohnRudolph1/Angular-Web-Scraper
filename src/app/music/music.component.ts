import { Component, OnInit } from '@angular/core';
import { FetchData } from '../fetch.component';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent  {

  events$;
  constructor(private eventData: FetchData){}

  fetchMusic() {
    this.events$ = this.eventData.fetchMusic();
  }
}