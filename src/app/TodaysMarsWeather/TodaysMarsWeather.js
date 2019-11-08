import React from 'react';
import moment from 'moment';
import { H2, P, H3 } from '../globalEmotions/GlobalEmotions';

const TodaysMarsWeather = props => {
  let imperialHigh;
  let imperialLow;
  let imperialSpeed;
  let formatedDate;
  const correctFormats = (obj) => {
    imperialHigh = Math.round((obj.highTemp * 9/5) + 32);
    imperialLow = Math.round((obj.lowTemp * 9/5) + 32);
    isNaN(obj.averageWindSpeed) ? imperialSpeed = obj.averageWindSpeed : imperialSpeed = Math.round(obj.averageWindSpeed * 2.237) + 'mph';
    formatedDate = moment(obj.UTCDate).format('MMM DD YYYY');
    return;
  } 
  correctFormats(props.weatherObject);
  return (
    <>
      <H2>Most Recent Mars Weather Updates</H2>
      <H3>It's {props.weatherObject.season} on Mars!</H3>
      <P>The weather report for {formatedDate}:</P>
      <P>High Temp: {imperialHigh}&deg;F</P>
      <P>Low Temp: {imperialLow}&deg;F</P>
      <P>Average Wind Speed: {imperialSpeed}</P>
      <P>Wind Direction: {props.weatherObject.averageWindDirection}</P>
    </>
  )
}

export default TodaysMarsWeather;