import React from 'react';
import './App.css';
import ClassCounter from './components/useState/classCounter';
import CounterHooks from './components/useState/CounterHooks';
import Hookcounte2 from './components/useState/Hookcounte2';
import Hookcounter3 from './components/useState/Hookcounter3';
import Hookcounter4 from './components/useState/Hookcounter4';
import HookCounter1 from './useEffect/HookCounter1';
import HookMounts from './useEffect/HookMounts';
import MouseContainer from './useEffect/MouseContainer';
import IntervalCounter from './useEffect/IntervalCounter';
import Slider from './ReactSlider/Slider';

function App() {
  const photos = [
  'https://images.unsplash.com/photo-1516918656725-e9b3ae9ee7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://media.boingboing.net/wp-content/uploads/2018/12/Screen-Shot-2018-12-19-at-10.35.29-AM.jpg',
  'https://wallpaperaccess.com/full/405435.jpg',
  'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]  
  return (
    <div className="App">
      <Slider slides={photos} height='50vh' autoplay={2} /> 
      {/* <IntervalCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMounts /> */}
      {/* <HookCounter1 /> */}
      {/* <Hookcounter4 />
      <Hookcounter3 />
      <Hookcounte2 />
      <ClassCounter />
      <CounterHooks /> */}
    </div>
  );
}

export default App;
