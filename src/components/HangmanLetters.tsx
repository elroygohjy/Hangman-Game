import React, { useEffect, useState } from 'react';

interface letterProps {
  setHasWon: React.Dispatch<React.SetStateAction<boolean>>;
  lives: number;
  setLives: React.Dispatch<React.SetStateAction<number>>;
  className: string;
  hangmanWord: string;
  guessedLetters: any;
  displayedWord: string;
  setDisplayedWord: React.Dispatch<React.SetStateAction<string>>;
}

const HangmanLetters = ({
  setHasWon,
  lives,
  setLives,
  className,
  hangmanWord,
  guessedLetters,
  displayedWord,
  setDisplayedWord,
}: letterProps) => {
  //To update the letters shown to the user whenever user inputs a new letter
  function updateDisplayLetters() {
    const originalWord = hangmanWord.split('');
    const oldDisplayedWord = displayedWord;
    const newDisplayedWord = displayedWord.split(' ');
    const lastLetterGuessed = guessedLetters.lettersArray.slice(-1);
    for (let i = 0; i < originalWord.length; i++) {
      //Letter guess correctly
      if (lastLetterGuessed == originalWord[i]) {
        newDisplayedWord[i] = originalWord[i];
      }
    }
    //Incorrect guess
    if (newDisplayedWord.join(' ') === oldDisplayedWord) {
      setLives(lives - 1);
    }
    setDisplayedWord(newDisplayedWord.join(' '));
    //All letters found
    if (newDisplayedWord.join('') == hangmanWord) {
      setHasWon(true);
    }
  }

  useEffect(() => {
    updateDisplayLetters();
  }, [guessedLetters]);

  return <div className={className}>{displayedWord}</div>;
};
export default HangmanLetters;
