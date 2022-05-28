import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';

interface keyboardProps {
  className: string;
}

const Keyboard = ({ className }: keyboardProps) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const firstRowKeyboard = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const secondRowKeyboard = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const thirdRowKeyboard = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const checkKeyNotInPressedKeys = (key: string) => {
    return pressedKeys.filter(pressedKey => pressedKey == key).length == 0;
  };
  const updatePressedKeys = (key: string) => {
    console.log(pressedKeys);
    if (pressedKeys.filter(pressedKey => pressedKey == key).length == 0) {
      setPressedKeys([...pressedKeys, key]);
    }
  };

  const [pressed, setPressed] = useState<string[]>([]);
  const firstRowKeyboard = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const secondRowKeyboard = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const thirdRowKeyboard = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const updatePressedKeys = (key: string) => {
    console.log(pressed);
    if (pressed.filter(pressed => pressed == key).length == 0) {
      setPressed([...pressed, key]);
    }
  };
  const checkKeyNotInPressedKeys = (key: string) => {
    return pressed.filter(pressed => pressed == key).length == 0;
  };
  return (
    <div className='keyboard-container'>
      <div className='keyboard-row'>
        {firstRowKeyboard.map(key => (
          <Button
            className={checkKeyNotInPressedKeys(key) ? 'key-button' : 'pressed key-button'}
            variant='contained'
            onClick={() => updatePressedKeys(key)}
          >
            <div className='button-text'>{key}</div>
          </Button>
        ))}
      </div>
      <div className='keyboard-row'>
        {secondRowKeyboard.map(key => (
          <Button
            className={checkKeyNotInPressedKeys(key) ? 'key-button' : 'pressed key-button'}
            variant='contained'
            onClick={() => updatePressedKeys(key)}
          >
            <div className='button-text'>{key}</div>
          </Button>
        ))}
      </div>
      <div className='keyboard-row'>
        {thirdRowKeyboard.map(key => (
          <Button
            className={checkKeyNotInPressedKeys(key) ? 'key-button' : 'pressed key-button'}
            variant='contained'
            onClick={() => updatePressedKeys(key)}
          >
            <div className='button-text'>{key}</div>
          </Button>
        ))}
      </div>
    </div>
    <>
      <div className='keyboard-container'>
        <div className='keyboard-row'>
          {firstRowKeyboard.map(key => (
            <Button
              variant='contained'
              onClick={() => updatePressedKeys(key)}
              className={checkKeyNotInPressedKeys(key) ? 'keyboard-button' : 'pressed keyboard-button'}
            >
              <div className='keyboard-key'>{key}</div>
            </Button>
          ))}
        </div>
        <div className='keyboard-row'>
          {secondRowKeyboard.map(key => (
            <Button
              variant='contained'
              onClick={() => updatePressedKeys(key)}
              className={checkKeyNotInPressedKeys(key) ? 'keyboard-button' : 'pressed keyboard-button'}
            >
              <div className='keyboard-key'>{key}</div>
            </Button>
          ))}
        </div>
        <div className='keyboard-row'>
          {thirdRowKeyboard.map(key => (
            <Button
              variant='contained'
              onClick={() => updatePressedKeys(key)}
              className={checkKeyNotInPressedKeys(key) ? 'keyboard-button' : 'pressed keyboard-button'}
            >
              <div className='keyboard-key'>{key}</div>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Keyboard;
