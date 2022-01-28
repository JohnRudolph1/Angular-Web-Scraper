import { Component, OnInit } from '@angular/core';
import { FetchData } from '../fetch.component';
// import { FunctionComponent } from '../fetch/functions.component';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  events$;
    constructor(private eventData: FetchData){}
  
    fetchEvents() {
      this.events$ = this.eventData.fetchEvents();
    }
}
