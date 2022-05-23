import React, { useState } from 'react';
import { Settings, VolumeUp, VolumeMute } from '@mui/icons-material';
import { Box, Button, Modal } from '@mui/material';

interface audioMenuProps {
  audio: HTMLAudioElement;
  setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement>>;
}

function OptionMenu({ audio, setAudio }: audioMenuProps) {
  const audioElem = audio;
  const [open, setOpen] = useState(false);

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
