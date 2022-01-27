import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outdoors',
  templateUrl: './outdoors.component.html',
  styleUrls: ['./outdoors.component.css']
})
export class OutdoorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
window.addEventListener("load", (event) => {
  //selector shows which button id will be selected
  const scrape = document.querySelector("#outdoors");
  const content = document.querySelector(".content");
  scrape.addEventListener("click", async () => {
    //awaits for the fetched src to be called upon
    fetch("http://localhost:4200/outdoors")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((article) => {
          const eventData =
            `<div class="card-deck">
            <div class="card">
              <img class="card-img-top" src="https://www.egov.com/wp-content/uploads/2021/03/iStock-618465922-scaled.jpg" style="width:200px;height:200px;">` +
            `<div class="card-body">
                <h5 class="card-title">${article.title}</h5>` +
            `<p class="card-text">${article.date}</p>` +
            `<p class="card-text">${article.location}</p>` +
            `<button><a href = "${article.url}">Event Link</a></button>
              </div>
            </div>`;
          content.insertAdjacentHTML("beforeend", eventData);
        });
      });
  });
});
