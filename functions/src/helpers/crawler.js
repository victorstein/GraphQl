/**
 * @module Crawler
 * @description this module contains the main crawling functionality that feeds the dattabase
 * <br/><br/>
 * @requires puppeteer
 * @requires HelperFunctions
 * @author Alfonso Gomez
 * @see {@link https://graphql.org/graphql-js/type/}
*/

import puppeteer from 'puppeteer'
import * as helper from './functions'

/**
 * @constant date
 * @description constant that contains the current date in format dmyyyy from the helper function getCurrentDateString
 * @see module:HelperFunctions
*/
const date = helper.getCurrentDateString();

class crawler {

  constructor(){
    this.movies = []
    this.getMovieData = this.getMovieData.bind(this)
  }

  async getMovieData(url, browser){

    let page = await browser.newPage();

    await page.goto(url, {waitUntil: 'load'});
    let data = await page.evaluate(() => {
      let director = document.querySelector('li.director > a').innerText;
      let releaseDate = document.querySelector('div.details-wrapper > ul > li:nth-child(2)').innerText.split(":")[1].replace(/^\s+|\s+$/g,'');
      let genere = document.querySelector('li.common-list').innerText.split(":")[1].replace(/^\s+|\s+$/g,'');
      let synopsis = document.querySelector('div.moview-details-text').innerText.replace(/^\s+|\s+$/g,'');
      let trailer = document.querySelector('div.row > div > div > div.trailer-image-wrap > img').src;
      let cover_photo = document.querySelector('.moview-cover').style.backgroundImage.split('url("')[1].split('")')[0];
      let duration = document.querySelector('.movie-duration').innerText.replace(/^\s+|\s+$/g,'');

      return { director, releaseDate, genere, synopsis, trailer, cover_photo, duration }
    })
    await page.goto('about:blank')
    await page.close();

    return data
  }

  async start(){

    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();

    await page.goto('http://tandas.world/cartelera/', {waitUntil: 'load'});
    let data = await page.evaluate(() => {
      let movies = Array.from(document.querySelectorAll('.event-showtimes'));
      movies = movies.map(movie => {
        return {
          id: movie.dataset.id,
          small_photo: movie.querySelector(".img-responsive.wp-post-image").src.replace(/^\s+|\s+$/g,''),
          name: movie.querySelector(".event-title").innerText.replace(/^\s+|\s+$/g,'').toUpperCase(),
          url: movie.querySelector(".event-title").href.replace(/^\s+|\s+$/g,''),
          rating: movie.querySelector(".rating").style.width.replace(/^\s+|\s+$/g,''),
          classification: movie.querySelector("div.event-showtimes-event-data > span").innerText.split("|")[0].replace(/^\s+|\s+$/g,'')
        }
      })
      return movies
    });
    await page.goto('about:blank')
    await page.close();

    moviesData = []

    for(let movie of data){
      let movieData = await this.getMovieData(movie.url, browser);
      moviesData.push(movieData);
    }

  }

}

let crawlData = new crawler()

export default crawlData
