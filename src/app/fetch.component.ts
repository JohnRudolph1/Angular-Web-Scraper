
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable()
export class FetchData {
  
  
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