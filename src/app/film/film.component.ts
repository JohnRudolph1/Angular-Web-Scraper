import { Component, OnInit } from '@angular/core';
import { FetchData } from '../fetch.component';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent  {

  events$;
    constructor(private eventData: FetchData){}
  
    fetchFilm() {
      this.events$ = this.eventData.fetchFilm();
    }
}
