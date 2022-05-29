import React, { useState } from 'react';
import { Settings, VolumeUp, VolumeMute } from '@mui/icons-material';
import { Box, Button, Modal } from '@mui/material';

interface audioMenuProps {
  audio: HTMLAudioElement;
  setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement>>;
  isStart?: boolean;
  setIsStartScreen?: React.Dispatch<React.SetStateAction<boolean>>;
  setLives?: React.Dispatch<React.SetStateAction<number>>;
  setPressed?: React.Dispatch<React.SetStateAction<string[]>>;
}

function OptionMenu({ audio, setAudio, setIsStartScreen, isStart, setLives, setPressed }: audioMenuProps) {
  const audioElem = audio;
  const [open, setOpen] = useState(false);

  const onClickBackButton = () => {
    setIsStartScreen!(true);
    setLives!(0);
    setPressed!([]);
    setOpen(false);
  };

  // @ts-ignore
  return (
    <div>
      <Button variant='contained' className='option' onClick={() => setOpen(true)}>
        <Settings />
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className='modal-box'>
          <h1 className='setting-header'>Settings</h1>
          <div className='setting-divider' />
          <p className='credits'>Credits: Elroy, Dillon, Claudia, Felicia Mah, Felicia Gan</p>
          <SoundButton audio={audioElem} setAudio={setAudio} />
          {!isStart && (
            <Button variant='contained' className='back-button' onClick={() => onClickBackButton()}>
              Back to Home Screen?
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
}

function SoundButton({ audio, setAudio }: audioMenuProps) {
  const audioElement = audio;
  const [isAudioPlayed, setIsAudioPlayed] = useState(!audio.paused);

  const onClickAudioButton = () => {
    if (isAudioPlayed) {
      audioElement.pause();
      setIsAudioPlayed(false);
    } else {
      audioElement.play();
      setIsAudioPlayed(true);
    }
    setAudio(audioElement);
  };

  return (
    <Button variant='contained' className='sound-button' onClick={() => onClickAudioButton()}>
      {isAudioPlayed ? <VolumeUp /> : <VolumeMute />}
    </Button>
  );
}

export default OptionMenu;
