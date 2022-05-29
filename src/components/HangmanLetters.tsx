import React, { useEffect, useRef } from 'react';

interface letterProps {
  setHasWon: React.Dispatch<React.SetStateAction<boolean>>;
  lives: number;
  setLives: React.Dispatch<React.SetStateAction<number>>;
  className: string;
  hangmanWord: string;
  pressed: string[];
  displayedWord: string;
  setDisplayedWord: React.Dispatch<React.SetStateAction<string>>;
}

const HangmanLetters = ({ setHasWon, lives, setLives, className, hangmanWord, pressed, displayedWord, setDisplayedWord }: letterProps) => {
  const isMounted = useRef(false);
  //To update the letters shown to the user whenever user inputs a new letter
  function updateDisplayLetters() {
    const originalWord = hangmanWord.split('');
    const oldDisplayedWord = displayedWord;
    const newDisplayedWord = displayedWord.split(' ');
    if (pressed.length == 0) {
      return;
    } else {
      const lastLetterGuessed = pressed[pressed.length - 1].toLocaleLowerCase();
      console.log(lastLetterGuessed);
      console.log(pressed);
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
  }

  useEffect(() => {
    console.log(isMounted.current);
    if (isMounted.current) {
      console.log(isMounted.current);
      updateDisplayLetters();
    } else {
      isMounted.current = true;
    }
  }, [pressed]);

  return (
    <div className={className}>
      {displayedWord} <br /> {lives} lives left
    </div>
  );
};
export default HangmanLetters;
