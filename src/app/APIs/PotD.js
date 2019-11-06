import { useEffect, useState } from 'react';
import Axios from 'axios';

const PotD = changeDate => {
  const [data, setData] = useState({
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    title: '',
    url: '',
  });
  useEffect(() => {
    Axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=imt8zuR2dp53cZeK0DfQxhyJO39CWkDL7gTuZmgK&date=${changeDate}`,
    )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [changeDate]);
  return data;
};

export default PotD;
