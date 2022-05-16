import { motion } from 'framer-motion';
import React from 'react';

const animation = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0vh',
    opacity: 1,
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

interface titleProps {
  currentState: boolean;
  className: string;
  body: string;
  transitionTime: number;
}

const HomeTitle = ({ currentState, className, body, transitionTime }: titleProps) => {
  return (
    <motion.div
      animate={currentState ? 'visible' : 'exit'}
      variants={animation}
      className={className}
      transition={{ default: { duration: transitionTime } }}
    >
      {body}
    </motion.div>
  );
};

export default HomeTitle;
