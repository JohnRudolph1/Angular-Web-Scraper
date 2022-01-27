const PORT = 4200;
const axios = require("axios");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const getEvents = require("./eventPageScraper");
const res = require("express/lib/response");

app.use(cors());


// app.use(express.static(path.join(__dirname, "html")));


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
const eventRouter = require("./routes/events");

app.use("/events", eventRouter )

app.listen(PORT);

// app.get("/scrape", async function (req, res) {
//   res.json("This is my webscraper");
//   await getEvents();
//   res.json("Scraped");
// });
// app.listen(PORT);
///path be local host
//res.send()
//set up api routes that serve up html
//express vid how to render html

//app.get/events/music
//use angular 
//events component that makes request based on the button click 
//follder called client ng new 
//npm concurrentley