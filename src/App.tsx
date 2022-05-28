/* eslint @typescript-eslint/no-var-requires: "off" */
import React, { useEffect, useState } from 'react';
import { Settings } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from '@mui/material';
import HomeButton from './components/HomeButton';
import HomeTitle from './components/HomeTitle';
import OptionMenu from './components/OptionMenu';
// @ts-ignore
import music from './music.mp3';
import './App.css';
import HangmanLetters from './components/HangmanLetters';
import HangmanDrawing from './components/HangmanDrawing';
import Keyboard from './components/Keyboard';

function App() {
  const [isStartScreen, setIsStartScreen] = useState(true);
  //To display the winning dialog
  const [hasWon, setHasWon] = useState(false);
  const [guess, setGuess] = useState('');
  //Number of hangman lives/tries a user has
  const [lives, setLives] = useState(0);
  //The letters that will be displayed to the user, '_' as an unguessed letter
  const [displayedWord, setDisplayedWord] = useState('');
  //For now only 1 word, will add more later https://www.ef.edu/english-resources/english-vocabulary/top-3000-words/
  const [hangmanWord, setHangmanWord] = useState('');
  //To store the array of letters that the user has tried
  const [guessedLetters, setGuessedLetters] = useState<{ lettersArray: string[] }>({
    lettersArray: [],
  });
  const initialiseGame = (mode: number) => {
    setIsStartScreen(false);
    loadHangmanWord();
    setLives(mode);
  };
  const [audio, setAudio] = useState(new Audio(music));

  useEffect(() => {
    audio.loop = true;
    audio.play();
    //Add function here
  }, []);

  //To be modified with keyboard(add setGuessedLetters({ lettersArray: [...guessedLetters.lettersArray, value] }); to new keyboard function)
  function test(value: string) {
    if (value.split('').length === 1 && value !== '') {
      if (!guessedLetters.lettersArray.includes(value)) {
        setGuessedLetters({ lettersArray: [...guessedLetters.lettersArray, value] });
      }
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
    const mode = require('./components/HangmanWordDatabase.json');
    let chosenWord = '';
    while (chosenWord.length < 5 || chosenWord.length > 8) {
      chosenWord = mode[Math.floor(Math.random() * mode.length)].word;
    }
    setHangmanWord(chosenWord);
    setDisplayedWord(loadedWord.repeat(chosenWord.length));
  }

  return (
    <div className='main-frame'>
      <div className='main-window'>
        <HomeTitle currentState={isStartScreen} className={'main-header header-bounce'} body={'HangMan'} transitionTime={1} />
        <HomeButton
          currentState={isStartScreen}
          onClick={() => initialiseGame(10)}
          className='easy button'
          body='Easy'
          transitionTime={1}
        />
        <HomeButton currentState={isStartScreen} onClick={() => initialiseGame(6)} className='button' body='Hard' transitionTime={1} />
        <OptionMenu audio={audio} setAudio={setAudio} isStart={isStartScreen} setIsStart={setIsStartScreen} />
        {/*TODO: use vh so that the user keyboard will compress the hangman*/}
        <HangmanDrawing lives={lives} isStarted={isStartScreen} />
        {!isStartScreen && (
          <div>
            <HangmanLetters
              setHasWon={setHasWon}
              lives={lives}
              setLives={setLives}
              className={'letters'}
              hangmanWord={hangmanWord}
              guessedLetters={guessedLetters}
              displayedWord={displayedWord}
              setDisplayedWord={setDisplayedWord}
            />
            <h3 className='display-lives'>{lives} lives left</h3>
          </div>
        )}
        {!isStartScreen && <Keyboard className='keyboard' />}
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
        <Dialog
          open={lives == 0 && !isStartScreen}
          keepMounted
          onClose={() => setHasWon(false)}
          aria-describedby='alert-dialog-slide-description'
        >
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
