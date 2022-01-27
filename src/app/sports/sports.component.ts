import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
window.addEventListener("load", (event) => {
  //selector shows which button id will be selected
  const scrape = document.querySelector("#tech");
  const content = document.querySelector(".content");
  scrape.addEventListener("click", async () => {
    //awaits for the fetched src to be called upon
    fetch("http://localhost:4200/tech")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((article) => {
          const eventData =
            `<div class="card-deck">
            <div class="card">
              <img class="card-img-top" src="https://www.investopedia.com/thmb/yvwGsKs6nSHBiOoa9cnoX5uHCPY=/735x0/GettyImages-964033964-ca3290057ccc4024b57e755423572264.jpg" style="width:200px;height:200px;">` +
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
