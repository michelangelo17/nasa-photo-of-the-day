import React from 'react';
import moment from 'moment';

const TodaysMarsWeather = props => {
  let imperialHigh;
  let imperialLow;
  let imperialSpeed;
  let formatedDate;
  const correctFormats = (obj) => {
    imperialHigh = Math.round((obj.highTemp * 9/5) + 32);
    imperialLow = Math.round((obj.lowTemp * 9/5) + 32);
    imperialSpeed = Math.round(obj.averageWindSpeed * 2.237);
    formatedDate = moment(obj.UTCDate).format('MMM DD YYYY');
    return;
  } 
  correctFormats(props.weatherObject);
  return (
    <>
      <h2>Most Recent Mars Weather Updates</h2>
      <h3>It's {props.weatherObject.season} on Mars!</h3>
      <p>The weather report for {formatedDate}.</p>
      <p>High Temp: {imperialHigh}&deg;F</p>
      <p>Low Temp: {imperialLow}&deg;F</p>
      <p>Average Wind Speed: {imperialSpeed}mph</p>
      <p>Wind Direction: {props.weatherObject.averageWindDirection}</p>
    </>
  )
}

export default TodaysMarsWeather;