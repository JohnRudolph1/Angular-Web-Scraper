import { Component, OnInit } from '@angular/core';
import { FetchData } from '../fetch.component';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent {
  events$;
    constructor(private eventData: FetchData){}
  
    fetchCommunity() {
      this.events$ = this.eventData.fetchCommunity();
    }
}


