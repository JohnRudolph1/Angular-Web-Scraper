import { Component } from '@angular/core';
import { Events } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-data';

  sourceList: Events[];
  displayList: Events[];

	constructor() {
		this.sourceList = [];
		this.displayList = [];
		

    fetch("http://localhost:4200/community")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((data) => {
        const fetchedData = data.event;
				// loop over satellites
				for(let i=0; i < fetchedData.length; i++) {
					// create a Satellite object 
					let events = new Events(fetchedData[i].title, fetchedData[i].date, fetchedData[i].location, fetchedData[i].url);
					// add the new Event object to sourceList 
					this.sourceList.push(events);
				 }

				 // make a copy of the sourceList to be shown to the user
				 this.displayList = this.sourceList.slice(0);
	  
			});
		});

	}

}