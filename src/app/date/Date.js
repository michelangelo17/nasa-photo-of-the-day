import React from 'react';
import moment from 'moment';

const Date = props => {
  return (
    <>
      <p>Now viewing: {moment(props.picDate).format('MMM DD YYYY')}</p>
    </>
  )
}

export default Date;