import Start from '@/components/index/start/Start'
import type { Metadata } from 'next'
import { Box, Container, Typography } from '@mui/material'
import wait from '@/services/wait'
import Loader from '../components/layout/loader'
import Image from 'next/image'
import Why from '@/components/index/about/Why'
import Bg from '@/components/layout/Bg'
import List from '@/components/index/сonsultations/List'

export const metadata: Metadata = {
  title: 'Нутрициолог - Анна Бехтольд',
  description: 'Анна Бехтольд. Нутрициолог - специалист в области питания, а также восстановления и поддержания здоровья немедикаментозным способом',
}

export default function Home() {

  return (
    <>
      <Loader />
      <Start />
      <Bg />
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Box className='w-full anchor' id='about_anchor'>
          <Typography variant='h3' color='secondary' data-aos='fade-up'>
            Вы здесь потому, что
          </Typography>
          <Why />
        </Box>
        <Box className='w-full anchor mb-20' id='services_anchor'>
          <Typography variant='h3' color='secondary' textAlign='center' data-aos='fade-up'>
            Что я предлагаю
          </Typography>
          <List />
        </Box>
      </Container>
    </>
  )
}
