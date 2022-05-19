import React, { useEffect, useState } from 'react';
import { Settings } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import HomeButton from './components/HomeButton';
import HomeTitle from './components/HomeTitle';
// @ts-ignore
import music from './music.mp3';
import './App.css';

function App() {
  const [isStart, setIsStart] = useState(true);
  const [guess, setGuess] = useState('testing');
  const onClick = () => setIsStart(false);
  const audio = new Audio(music);

  useEffect(() => {
    audio.loop = true;
    audio.play();
  }, []);

  return (
    <div className='main-frame'>
      <div className='main-window'>
        <HomeTitle currentState={isStart} className={'main-header header-bounce'} body={'HangMan'} transitionTime={1} />
        <HomeButton currentState={isStart} onClick={onClick} className='easy button' body='Easy' transitionTime={1} />
        <HomeButton currentState={isStart} onClick={onClick} className='button' body='Hard' transitionTime={1} />
        <Button variant='contained' className='option' onClick={() => console.log('Change here for Modal!')}>
          <Settings />
        </Button>
        {/*TODO: use vh so that the user keyboard will compress the hangman*/}
        <div className='hang-man' />
        {!isStart && (
          <TextField
            id='filled-basic'
            label='Guess Here!'
            variant='filled'
            className='input-field'
            value={guess}
            onChange={e => setGuess(e.currentTarget.value)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
