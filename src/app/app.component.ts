import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-data';

  

}
// import { Component } from '@angular/core';

// import { Fetch } from './fetch.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   event$;
//   constructor(private eventData: Fetch){}

//   fetchSports() {
//     this.event$ = this.eventData.fetchSports();
//   }
// }