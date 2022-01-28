import { Component, OnInit } from '@angular/core';
import { FetchData } from '../fetch.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  events$;
  constructor(private eventData: FetchData){}

  fetchEvents() {
    this.events$ = this.eventData.fetchEvents();
  }
}
