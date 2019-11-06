import { useEffect } from 'react';
import Axios from 'axios';

const PotD = props => {
  useEffect(() => {
    Axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=imt8zuR2dp53cZeK0DfQxhyJO39CWkDL7gTuZmgK',
    )
      .then((res) => {
        props.setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return null;
};

export default PotD;
