import React, {useState} from "react";
import "./App.css";
import PotD from './APIs/PotD';
import Title from './title/Title';
import Image from './image/Image';
import Description from './description/Description';
import Date from './date/Date';

function App() {
  const [data, setData] = useState({date: '', explanation: '', hdurl: '', media_type: '', title: '', url: ''});
  let nasaDate = data.date;
  let nasaDescription = data.explanation;
  let nasaHDimage = data.hdurl;
  let mediaType = data.media_type;
  let nasaTitle = data.title;
  let standardImage = data.url;
  console.log(nasaDate, nasaDescription, nasaHDimage, mediaType, nasaTitle, standardImage);
  return (
    <div className="App">
      <PotD setData={setData} />
      <Title />
      <Image />
      <Description />
      <Date />
    </div>
  );
}

export default App;
