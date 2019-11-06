import React from 'react';
const DateChanger = (props) => {
  return (
    <>
      <p>Choose a different date:</p>
      <input
        onChange={(e) => props.setChangeDate(e.target.value)}
        type='date'
        className='dateInput'
        name='chooseDate'
      />
    </>
  );
};

export default DateChanger;
