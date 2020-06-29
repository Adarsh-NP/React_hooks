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
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]  
  return (
    <div className="App">
      <Slider slides={photos} height='50vh' autoplay={0} /> 
    </div>
  );
}

export default App;
