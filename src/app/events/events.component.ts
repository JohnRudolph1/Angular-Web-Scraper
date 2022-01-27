import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
// const { default: axios } = require("axios");
// app.use(cors());
export class EventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

window.addEventListener("load", (event) => {
  //selector shows which button id will be selected
  const scrape = document.querySelector("#scrape");
  const content = document.querySelector(".content");
  scrape.addEventListener("click", async () => {
    //awaits for the fetched src to be called upon
    fetch("http://localhost:4200/scrape")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((article) => {
          const eventData =
            `<div class="card-deck">
            <div class="card">
              <img class="card-img-top" src="https://fltmag.com/wp-content/uploads/2020/06/unnamed.png" style="width:200px;height:200px;">` +
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