import React from 'react';

interface hangmanDrawingProps {
  lives: number;
  isStarted: boolean;
}

const HangmanDrawing = ({ lives, isStarted }: hangmanDrawingProps) => {
  return (
    <div className={isStarted ? 'hangman-drawing-box' : 'start-game-hangman-drawing-box'}>
      {lives < 10 && <div className='hangman-base' />}
      {lives < 9 && <div className='hangman-stand' />}
      {lives < 8 && <div className='hangman-hori' />}
      {lives < 7 && <div className='hangman-hang' />}
      {lives < 6 && <div className='hangman-head' />}
      {lives < 5 && <div className='hangman-body' />}
      {lives < 4 && <div className='hangman-left-hand' />}
      {lives < 3 && <div className='hangman-right-hand' />}
      {lives < 2 && <div className='hangman-left-leg' />}
      {lives < 1 && <div className='hangman-right-leg' />}
    </div>
  );
};
export default HangmanDrawing;
