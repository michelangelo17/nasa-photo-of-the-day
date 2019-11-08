import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import TodaysMarsWeather from './TodaysMarsWeather/TodaysMarsWeather';
import Title from './title/Title';
import Image from './image/Image';
import Description from './description/Description';
import Date from './date/Date';
import DateChanger from './dateChanger/DateChanger';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing, shallow TodaysMarsWeather', () => {
  shallow(<TodaysMarsWeather />);
});
it('renders without crashing, shallow Title', () => {
  shallow(<Title />);
});
it('renders without crashing, shallow Image', () => {
  shallow(<Image />);
});
it('renders without crashing, shallow Description', () => {
  shallow(<Description />);
});
it('renders without crashing, shallow Date', () => {
  shallow(<Date />);
});
it('renders without crashing, shallow DateChanger', () => {
  shallow(<DateChanger />);
});
