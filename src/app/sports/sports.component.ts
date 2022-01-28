

//   import { Component } from '@angular/core';

// import { Fetch } from '../fetch.component';

// @Component({
//   selector: 'app-sports',
//   templateUrl: './sports.component.html',
//   styleUrls: ['./sports.component.css']
// })
// export class SportsComponent {
//   item$;
//   constructor(private peopleService: Fetch){}

//   fetchSports() {
//     this.item$ = this.peopleService.fetchSports();
//   }
// }


  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { Injectable } from '@angular/core';
  import { FetchData } from '../fetch.component';
  import { Observable } from 'rxjs';
  @Component({
    selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
  })
  @Injectable()
  export class SportsComponent  {

    events$;
    constructor(private eventData: FetchData){}
  
    fetchSports() {
      this.events$ = this.eventData.fetchSports();
    }
}
