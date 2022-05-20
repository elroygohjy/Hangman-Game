import React, { useState } from 'react';
import { Settings } from '@mui/icons-material';
import { Button } from '@mui/material';
import HomeButton from './components/HomeButton';
import HomeTitle from './components/HomeTitle';
import OptionMenu from './components/OptionMenu';
import './App.css';

function App() {
  const [isStart, setIsStart] = useState(true);
  const onClick = () => setIsStart(false);

  return (
    <div className='main-frame'>
      <div className='main-window'>
        <HomeTitle currentState={isStart} className={'main-header'} body={'HangMan'} transitionTime={1} />
        <HomeButton currentState={isStart} onClick={onClick} className='easy button' body='Easy' transitionTime={1} />
        <HomeButton currentState={isStart} onClick={onClick} className='button' body='Hard' transitionTime={1} />
        <OptionMenu />
      </div>
    </div>
  );
}

export default App;
