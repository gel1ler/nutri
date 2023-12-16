'use client'
import { ExpandMore } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { useMeasure } from 'react-use';

interface QuestionProps {
  question: string;
  answer: string;
  num: number;
}

const defaultHeight = '100px'

const Question = ({ question, answer, num }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(defaultHeight)
  const [ref, { height }] = useMeasure()

  const expand = useSpring({
    config: { friction: 10 },
    height: isOpen ? `${contentHeight}px` : '0px',
    overflow: 'hidden'
  });

  useEffect(() => {
    setContentHeight(height + 'px')
  }, [height])

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const rotation = isOpen ? 'rotate(-180deg)' : '0px'

  return (
    <Box data-aos='fade-up' data-aos-offset='20'>
      <Box
        className='flex gap-4 items-center cursor-pointer'
        sx={{
          ":hover": {
            '#expand-more': {
              color: 'secondary.main',
              transform: 'scale(1.2) ' + rotation
            }
          }
        }}
        onClick={toggleOpen}
      >
        <Box bgcolor='secondary.main' className='flex items-center justify-center w-16 h-16 rounded-full'>
          <Typography color='primary' variant='h4'>{num}</Typography>
        </Box>
        <Typography variant='h5'>{question}</Typography>
        <ExpandMore
          id='expand-more'
          sx={{
            transition: 'all cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            transform: rotation
          }}
        />
      </Box>
      <animated.div style={expand}>
        <Typography ref={ref} sx={{ ml: '6rem' }}>{answer}</Typography>
      </animated.div>
    </Box>
  );
};

export default Question;