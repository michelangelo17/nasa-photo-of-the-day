import React from 'react';
const DateChanger = (props) => {
  return (
    <>
      <p>Choose a different date:</p>
      <input
        onChange={(e) => props.setChangeDate(e.target.value)}
        type='date'
        class='dateInput'
        name='chooseDate'
      />
    </>
  );
};

export default DateChanger;
