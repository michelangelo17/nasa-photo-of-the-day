import React, { useState } from 'react';
import PotD from './APIs/PotD';
import Title from './title/Title';
import Image from './image/Image';
import Description from './description/Description';
import DateChanger from './dateChanger/DateChanger';
import Date from './date/Date';
import moment from 'moment';
import MarsWeather from './APIs/MarsWeather';
import TodaysMarsWeather from './todaysMarsWeather/TodaysMarsWeather';
import '../index.css';
import { MainContainer, MaxWidth, DateContainer, PotDContainer } from './AppSC';

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
    <MainContainer>
      <MaxWidth>
          <Title picTitle={picTitle} />
          <Image
            picHDimage={picHDimage}
            picMediaType={picMediaType}
            picStandardImage={picStandardImage}
          />
          <PotDContainer>
          <Description picDescription={picDescription} />
          <DateContainer>
            <Date picDate={picDate} />
            <DateChanger setChangeDate={setChangeDate} />
          </DateContainer>
        </PotDContainer>
        <TodaysMarsWeather weatherObject={weatherObject} />
      </MaxWidth>
    </MainContainer>
  );
}

export default App;
