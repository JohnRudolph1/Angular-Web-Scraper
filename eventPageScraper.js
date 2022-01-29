const puppeteer = require("puppeteer");

const getEvents = async (url) => {
  let data = [];
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  //"https://www.eventbrite.com/d/mo--st-louis/all-events/"
  await page.goto(url);
  while (
    await page.$(
      "#chevron-right-chunky_svg__eds-icon--chevron-right-chunky_base"
    )
  ) {
    const pageResults = await page.evaluate(() => {
      let items = document.querySelectorAll(".eds-event-card-content__content");
      const results = [];
      items.forEach((item) => {
        results.push({
          title: item.querySelector(
            ".eds-event-card__formatted-name--is-clamped-three"
          ).innerText,
          date: item.querySelector(".eds-event-card-content__sub-title")
            .innerText,
          location: item.querySelector(".eds-event-card-content__sub")
            .innerText,
          url: item.querySelector("a").getAttribute("href"),
          // img: item.querySelector("img").getAttribute("src"),
        });
      });
      for (let i = 2; i <= results.length; i += 2) results.splice(i, 1);
      return results;
    });
    data = data.concat(pageResults);
    try {
      await page.waitForSelector(
        "#chevron-right-chunky_svg__eds-icon--chevron-right-chunky_base"
      );
      await page.click(
        "#chevron-right-chunky_svg__eds-icon--chevron-right-chunky_base"
      );
    } catch (error) {
      console.log(error);
      break;
    }
  }
  await browser.close();

  return data;
};
module.exports = getEvents;
//if you want to scrape other sites just make a new scraper and export the function
//then add the function to the server to allow it to fetch from new site
