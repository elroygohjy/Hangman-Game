import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const animation = {
  visible: {
    x: '0vh',
    opacity: 1,
  },
  exit: {
    x: '100vh',
    opacity: 0,
  },
};

interface buttonProps {
  currentState: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  body: string;
  transitionTime: number;
}

const HomeButton = ({ currentState, onClick, className, body, transitionTime }: buttonProps) => {
  return (
    <motion.div
      animate={currentState ? 'visible' : 'exit'}
      variants={animation}
      className={className}
      transition={{ default: { duration: transitionTime } }}
    >
      <Button variant='contained' onClick={onClick} className={className}>
        {body}
      </Button>
    </motion.div>
  );
};

export default HomeButton;
