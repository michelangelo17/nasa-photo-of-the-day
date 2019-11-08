import React from 'react';
import {ImageW100} from '../globalEmotions/GlobalEmotions'
const Image = props => {
  return (
      <ImageW100 src={props.picHDimage} alt='Nasa pic of the day!'/>
  )
}

export default Image;