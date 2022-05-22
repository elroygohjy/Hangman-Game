import React, { useState, useEffect } from 'react';
import { Settings, VolumeUp, VolumeMute } from '@mui/icons-material';
import { Box, Button, Modal } from '@mui/material';

function OptionMenu(props) {
  const audioElem = props.audioElem;
  const [open, setOpen] = useState(false);
 
  return (
    <div>
      <Button variant='contained' className='option' onClick={() => setOpen(true)}>
        <Settings />
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className='modal-box'>
          <SoundButton audioElem={audioElem}/>
          <p className='credits'>
            Credits: Elroy, Dillon, Claudia, Felicia Mah, Felicia Gan
          </p>
        </Box>
      </Modal>
    </div>
  );
}

function SoundButton(props) {
  const audioElem = props.audioElem;
  const [sound, setSound] = useState(!audioElem.paused);
  
  useEffect(() => {
      sound ? audioElem.play() : audioElem.pause();
    },
    [sound]
  );

  return (
    <Button variant='contained' className='sound-button' onClick={() => setSound(!sound)}>
      {sound ? <VolumeUp /> : <VolumeMute />}
    </Button>
  );
}

export default OptionMenu;
