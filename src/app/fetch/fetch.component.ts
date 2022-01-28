// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-fetch',
//   templateUrl: './fetch.component.html',
//   styleUrls: ['./fetch.component.css']
// })
// export class FetchComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
// import { Injectable, Input } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class Fetch {

//   constructor(private http: HttpClient) {}

//   fetchSports(): Observable<Object> {
//     return this.http.get('http://localhost:3000/sports');
//   }
//   fetchFilm(): Observable<Object> {
//     return this.http.get('http://localhost:3000/film');
//   }
//   fetchCommunity(): Observable<Object> {
//     return this.http.get('http://localhost:3000/community');
//   }
//   fetchAll(): Observable<Object> {
//     return this.http.get('http://localhost:3000/all');
//   }
//   fetchOutdoors(): Observable<Object> {
//     return this.http.get('http://localhost:3000/outdoors');
//   }
//   fetchTech(): Observable<Object> {
//     return this.http.get('http://localhost:3000/tech');
//   }
//   fetchMusic(): Observable<Object> {
//     return this.http.get('http://localhost:3000/music');
//   }

// }
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export class FetchComponent {
  

  constructor(private http: HttpClient) {}

  fetchSports(): Observable<Object> {
    return this.http.get('http://localhost:3000/sports');
  }
  fetchMusic(): Observable<Object> {
    return this.http.get('http://localhost:3000/music');
  }
  fetchFilm(): Observable<Object> {
    return this.http.get('http://localhost:3000/film');
  }
  fetchTech(): Observable<Object> {
    return this.http.get('http://localhost:3000/tech');
  }
  fetchOutdoors(): Observable<Object> {
    return this.http.get('http://localhost:3000/outdoors');
  }
  fetchCommunity(): Observable<Object> {
    return this.http.get('http://localhost:3000/community');
  }
  fetchEvents(): Observable<Object> {
    return this.http.get('http://localhost:3000/all');
  }

}