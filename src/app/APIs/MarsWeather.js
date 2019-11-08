import { useEffect, useState } from 'react';
import Axios from 'axios';

const MarsWeather = () => {
  const [weatherData, setWeatherData] = useState({
    highTemp: '',
    lowTemp: '',
    averageWindSpeed: '',
    averageWindDirection: '',
    UTCDate: '',
    season: '',
  });
  useEffect(() => {
    Axios.get(
      'https://api.nasa.gov/insight_weather/?api_key=imt8zuR2dp53cZeK0DfQxhyJO39CWkDL7gTuZmgK&feedtype=json&ver=1.0',
    )
      .then((res) => {
        let mostRecentDayKey = res.data.sol_keys[6];
        let mostRecentDay = res.data[mostRecentDayKey];
        mostRecentDay.WD.most_common === null ? 
        setWeatherData({
          highTemp: mostRecentDay.AT.mx,
          lowTemp: mostRecentDay.AT.mn,
          averageWindSpeed: 'Sorry! Not available today!',
          averageWindDirection: 'No idea!',
          UTCDate: mostRecentDay.Last_UTC,
          season: mostRecentDay.Season,
        }):
        setWeatherData({
          highTemp: mostRecentDay.AT.mx,
          lowTemp: mostRecentDay.AT.mn,
          averageWindSpeed: mostRecentDay.HWS.av,
          averageWindDirection: mostRecentDay.WD.most_common.compass_point,
          UTCDate: mostRecentDay.Last_UTC,
          season: mostRecentDay.Season,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return weatherData;
};

export default MarsWeather;
