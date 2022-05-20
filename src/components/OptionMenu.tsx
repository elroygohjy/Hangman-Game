import React, { useState } from 'react';
import { Settings, VolumeUp, VolumeMute } from '@mui/icons-material';
import { Box, Button, Typography, Modal } from '@mui/material';

const boxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'auto',
  whiteSpace: 'normal',
  display: 'inline-flex',
  bgcolor: 'background.paper',
  color: 'primary.main', 
};

function OptionMenu() {
  const [open, setOpen] = useState(false);
 
  return (
    <div>
      <Button variant='contained' className='option' onClick={() => setOpen(true)}>
        <Settings />
      </Button>
      <Modal 
        open={open}
        onClose={() => setOpen(false)} 
      >
        <Box sx={boxStyle}>
          <SoundButton />
          <Typography pt={2} fontWeight={'bold'}>
            Credits: Elroy, Dillon, Claudia, Felicia Mah, Felicia Gan
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

function SoundButton() {
  const [sound, setSound] = useState(true);
  
  return (
    <Button variant='contained' className='option' onClick={() => setSound(!sound)}>
      <VolumeUp />
    </Button>
  );
}

export default OptionMenu;
