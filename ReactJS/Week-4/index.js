import { series } from './data.js';
import { fancyLogSeriesReport } from './utils.js';

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);
    //(If a serie has been watched) {
    if (serie.isWatched) {
      // Update the count of watched series: "numberOfWatched"
      this.numberOfWatched++;
      // Check for "lastSerie" property, set if we don't.
      if (!this.lastSerie) {
        this.lastSerie = serie;
        // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater,
      } else if (this.lastSerie.finishedDate < serie.finishedDate) {
        // set "lastSerie" prop to "serie" object.
        this.lastSerie = serie;
        //}
      }
    } else {
      // If a serie hasn't been watched:
      // Check if serie has "isCurrent" prop
      if (!this.currentSerie) {
        // Check if we have a "currentSerie" property. Set if we don't.
        this.currentSerie = serie;
        // Check if we have a "nextSerie" property as well - if we didn't
      } else if (!this.nextSerie) {
        // set the .currentSerie property, set the .nextSerie property.
        this.nextSerie = serie;
      }

      //it should also update the number of series marked as watched / unwatched:
      //"numberOfWatched" and "numberOfUnWatched"
      this.numberOfUnWatched++;
    }
  };

  //check to see if we have series to process
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    for (let index = 0; index < series.length; index++) {
      //Use the .add function to handle adding series, so we keep counts updated.
      this.add(series[index]);
    }
  }

  this.finishSerie = function () {
    // find and update currently watching serie in "this.series" array
    // update "lastSerie" with the finished one
    this.lastSerie = this.currentSerie;
    // set "currentSerie" with the next one
    this.currentSerie = this.nextSerie;
    // set new nextSerie value with the next one which has not been watched.
    this.numberOfWatched++;
    // update "numberOfWatched" and "numberOfUnWatched" props
    this.numberOfUnWatched--;
  };
  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */
