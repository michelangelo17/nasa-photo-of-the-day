import React, { useState } from "react";
import "./App.css";
import PotD from './APIs/PotD';
import Title from './title/Title';
import Image from './image/Image';
import Description from './description/Description';
import DateChanger from './dateChanger/DateChanger';
import Date from './date/Date';
import moment from "moment";
import MarsWeather from "./APIs/MarsWeather";
import TodaysMarsWeather from "./todaysMarsWeather/TodaysMarsWeather";

function App() {
  const todaysDate = moment().format('YYYY-MM-DD');
  const [changeDate, setChangeDate] = useState(todaysDate);
  const picData = PotD(changeDate);
  const weatherObject = MarsWeather();
  let picDate = picData.date;
  let picDescription = picData.explanation;
  let picHDimage = picData.hdurl;
  let picMediaType = picData.media_type;
  let picTitle = picData.title;
  let picStandardImage = picData.url;
  
  return (
    <div className="App">
      <Title picTitle={picTitle} />
      <Image 
        picHDimage={picHDimage} 
        picMediaType={picMediaType}
        picStandardImage={picStandardImage}
      />
      <Description picDescription={picDescription} />
      <Date picDate={picDate} />
      <DateChanger setChangeDate={setChangeDate} />
      <TodaysMarsWeather weatherObject={weatherObject} />
    </div>
  );
}

export default App;
