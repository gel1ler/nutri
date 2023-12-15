import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Box className='flex '>
        <Box className='w-1/2 h-min aspect-video relative' data-aos='fade-up'>
          <Image
            alt='Анна Бехтольд'
            src='/feedback/person.svg'
            fill
          />
        </Box>
        <Box
          className='w-1/2 gap-4 flex flex-col'
          data-aos='fade-up'
          sx={{
            'b': {
              color: 'secondary.main'
            },
          }}
        >
          <Typography variant='h4'>
            Меня зовут Анна Бехтольд,<br /> и я - <b>нутрициолог</b>.
          </Typography>
          <Typography variant='h6'>
            <b>Я помогаю женщинам</b> избавляться от постоянного утомления, дискомфорта в теле, раздражительности и других проблем, связанных с питанием и образом жизни.<br />
          </Typography>
          <Typography variant='h6'>
            Я уверена, что <b>каждой женщине можно найти индивидуальный подход к питанию и здоровому образу жизни</b>, который поможет ей чувствовать себя лучше и достигать своих целей.<br />
          </Typography>
        </Box>
      </Box>
    </Container >
  )
}

export default AboutMe