import React from 'react';
import { P } from '../globalEmotions/GlobalEmotions';

const Date = props => {
  return (
    <>
      <P>Now viewing: {props.picDate}</P>
    </>
  )
}

export default Date;