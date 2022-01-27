import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
window.addEventListener("load", (event) => {
  //selector shows which button id will be selected
  const scrape = document.querySelector("#music");
  const content = document.querySelector(".content");
  scrape.addEventListener("click", async () => {
    //awaits for the fetched src to be called upon
    fetch("http://localhost:4200/music")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((article) => {
          const eventData =
            `<div class="card-deck">
            <div class="card">
              <img class="card-img-top" src="https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg" style="width:200px;height:200px;">` +
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
