import { Component, OnInit } from '@angular/core';
import { FetchComponent } from '../fetch/fetch.component';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  events$;
  constructor(private eventData: FetchComponent){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

//   fetchTech() {
//     this.events$ = this.eventData.fetchTech();

// }
}
