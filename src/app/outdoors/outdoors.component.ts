

  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { Injectable } from '@angular/core';
  import { FetchData } from '../fetch.component';
  import { Observable } from 'rxjs';
  @Component({
    selector: 'app-outdoors',
  templateUrl: './outdoors.component.html',
  styleUrls: ['./outdoors.component.css']
  })
  @Injectable()
  export class OutdoorsComponent {

    events$;
    constructor(private eventData: FetchData){}
  fetchOutdoors() {
      this.events$ = this.eventData.fetchOutdoors();
    }
}