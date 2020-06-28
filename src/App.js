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
  'https://parikramaengineering.com/wp-content/uploads/2019/05/get_in_touch_bg.jpg',
  'https://www.myfirstcollege.com/wp-content/uploads/2019/04/PARI-BUILDING.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUceVUmDp1G0GjHULbpZfLIEdKN4mGVSzZhA&usqp=CAU',
  'https://images.jdmagicbox.com/comp/ahmednagar/y7/9999px241.x241.110104121919.p6y7/catalogue/vishwabharati-academy-s-college-of-engineering-jamkhed-road-ahmednagar-colleges-ll0t3yo.jpg'
]  
  return (
    <div className="App">
      <Slider slides={photos} height='50vh' autoplay={0} /> 
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
