import React from 'react';
import { P, Input } from '../globalEmotions/GlobalEmotions';
const DateChanger = (props) => {
  return (
    <>
      <P>Choose a different date:</P>
      <Input
        onChange={(e) => props.setChangeDate(e.target.value)}
        type='date'
        className='dateInput'
        name='chooseDate'
      />
    </>
  );
};

export default DateChanger;
