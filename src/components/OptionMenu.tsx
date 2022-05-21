import React, { useState } from 'react';
import { Settings, VolumeUp, VolumeMute } from '@mui/icons-material';
import { Box, Button, Typography, Modal } from '@mui/material';

function OptionMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant='contained' className='option' onClick={() => setOpen(true)}>
        <Settings />
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className='modal-box'>
          <Typography pt={2} fontWeight={'bold'}>
            Credits:
          </Typography>
          <Typography className='credit-names' fontWeight={'bold'}>
            Elroy, Dillon, Claudia, Felicia Mah, Felicia Gan
          </Typography>
          <SoundButton />
        </Box>
      </Modal>
    </div>
  );
}

function SoundButton() {
  const [sound, setSound] = useState(true);

  return (
    <Button variant='contained' className='sound-button' onClick={() => setSound(!sound)}>
      <VolumeUp />
    </Button>
  );
}

export default OptionMenu;
