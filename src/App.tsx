import React, { useEffect, useState } from 'react';
import { Settings } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from '@mui/material';
import HomeButton from './components/HomeButton';
import HomeTitle from './components/HomeTitle';
// @ts-ignore
import music from './music.mp3';
import './App.css';
import HangmanLetters from './components/HangmanLetters';

function App() {
  const [isStart, setIsStart] = useState(true);
  //To display the winning dialog
  const [hasWon, setHasWon] = useState(false);
  const [guess, setGuess] = useState('');
  //Number of hangman lives/tries a user has
  const [lives, setLives] = useState(1);
  //The letters that will be displayed to the user, '_' as an unguessed letter
  const [displayedWord, setDisplayedWord] = useState('');
  //For now only 1 word, will add more later https://www.ef.edu/english-resources/english-vocabulary/top-3000-words/
  const hangmanWord = 'hello';
  //To store the array of letters that the user has tried
  const [guessedLetters, setGuessedLetters] = useState<{ lettersArray: string[] }>({
    lettersArray: [],
  });
  const initialiseGame = (mode: number) => {
    setIsStart(false);
    loadHangmanWord();
    setLives(lives + mode);
  };
  const audio = new Audio(music);

  useEffect(() => {
    audio.loop = true;
    audio.play();
    //Add function here
  }, []);

  //To be modified with keyboard(add setGuessedLetters({ lettersArray: [...guessedLetters.lettersArray, value] }); to new keyboard function)
  function test(value: string) {
    if (value.split('').length === 1 && value !== '') {
      setGuessedLetters({ lettersArray: [...guessedLetters.lettersArray, value] });
    }
    console.log(value);
    console.log(displayedWord);
    console.log(guessedLetters);
    console.log(lives);
    setGuess(value);
  }

  //Initialise word at start of game
  function loadHangmanWord() {
    const loadedWord = '_ ';
    setDisplayedWord(loadedWord.repeat(hangmanWord.length));
  }

  return (
    <div className='main-frame'>
      <div className='main-window'>
        <HomeTitle currentState={isStart} className={'main-header header-bounce'} body={'HangMan'} transitionTime={1} />
        <HomeButton currentState={isStart} onClick={() => initialiseGame(10)} className='easy button' body='Easy' transitionTime={1} />
        <HomeButton currentState={isStart} onClick={() => initialiseGame(6)} className='button' body='Hard' transitionTime={1} />
        <Button variant='contained' className='option' onClick={() => console.log('Change here for Modal!')}>
          <Settings />
        </Button>
        {/*TODO: use vh so that the user keyboard will compress the hangman*/}
        <div className='hang-man' />
        {!isStart && (
          <div>
            <HangmanLetters
              setHasWon={setHasWon}
              lives={lives}
              setLives={setLives}
              className={'logic'}
              hangmanWord={hangmanWord}
              guessedLetters={guessedLetters}
              displayedWord={displayedWord}
              setDisplayedWord={setDisplayedWord}
            />
            <h3>{lives} lives left</h3>
            <TextField
              id='filled-basic'
              label='Guess Here!'
              variant='filled'
              className='input-field'
              value={guess}
              // onChange={e => setGuess(e.currentTarget.value)}
              onChange={e => test(e.currentTarget.value)}
            />
          </div>
        )}
        <Dialog open={hasWon} keepMounted onClose={() => setHasWon(false)} aria-describedby='alert-dialog-slide-description'>
          {' '}
          <DialogTitle>{'Success!'}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-slide-description'>Congratulations! You guessed the word!</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => window.location.reload()}>Try again?</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={lives == 0} keepMounted onClose={() => setHasWon(false)} aria-describedby='alert-dialog-slide-description'>
          {' '}
          <DialogTitle>{'Failure'}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-slide-description'>Unfortunately, you did not guess the word</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => window.location.reload()}>Try again?</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
