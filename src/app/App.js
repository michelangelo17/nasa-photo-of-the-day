import React from "react";
import "./App.css";
import PotD from './APIs/PotD';
import Title from './title/Title';
import Image from './image/Image';
import Description from './description/Description';
import Date from './date/Date';

function App() {
  return (
    <div className="App">
      <Title />
      <Image />
      <Description />
      <Date />
    </div>
  );
}

export default App;
