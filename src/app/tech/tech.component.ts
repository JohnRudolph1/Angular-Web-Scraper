import { Component, OnInit } from '@angular/core';
import { FetchData } from '../fetch.component';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {

  events$;
  constructor(private eventData: FetchData){}

  fetchTech() {
    this.events$ = this.eventData.fetchTech();
  }
}
