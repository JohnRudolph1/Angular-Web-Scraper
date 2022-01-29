const PORT = 3000;
const axios = require("axios");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const getEvents = require("./eventPageScraper");
const res = require("express/lib/response");
//npm run server outside of scraper folder in the main flder
app.use(cors());



app.get("/", async (req, res) => {
  res.json("This is my webscraper");
});
//send get request to url/scrape
app.get("/scrape", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/all-events/"
  );
  //prints results to console and responds with seeing the link with json content
  console.log(results);
  res.json(results);
});

app.get("/community", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/community--events/"
  );
  console.log(results);
  res.json(results);
});
app.get("/music", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/music--events/"
  );
  console.log(results);
  res.json(results);
});
app.get("/film", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/film-and-media--events/"
  );
  console.log(results);
  res.json(results);
});
app.get("/tech", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/science-and-tech--events/"
  );
  console.log(results);
  res.json(results);
});
app.get("/sports", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/sports-and-fitness--events/"
  );
  console.log(results);
  res.json(results);
});
app.get("/outdoors", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/travel-and-outdoor--events/"
  );
  console.log(results);
  res.json(results);
});


app.listen(PORT);
console.log(`server listening on ${PORT}`)

