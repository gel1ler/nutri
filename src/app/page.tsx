import Start from '@/components/index/start/Start'
import type { Metadata } from 'next'
import { Box, Container } from '@mui/material'
import Loader from '../components/layout/loader'
import Why from '@/components/index/about/Why'
import Bg from '@/components/layout/Bg'
import ServicesList from '@/components/index/services/ServicesList'
import HelperTextOnSmallScreen from '@/components/UI/text/HelperTextOnSmallScreen'
import Title from '@/components/UI/text/Title'
import FeedbackList from '@/components/index/feedback/FeedbackList'
import AboutMe from '@/components/index/about/AboutMe'

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
        <Box className='w-full'>
          <Title>
            Вы здесь потому, что
          </Title>
          <HelperTextOnSmallScreen>
            Листайте вправо→
          </HelperTextOnSmallScreen>
          <Why />
        </Box>
        <Box className='w-full anchor mb-20' id='about_anchor'>
          <Title centered>
            Обо мне
          </Title>
          <AboutMe />
        </Box>
        <Box className='w-full anchor mb-20' id='services_anchor'>
          <Title centered>
            Услуги
          </Title>
          <ServicesList />
        </Box>
        <Box className='w-full anchor mb-20' id='feedback_anchor'>
          <Title centered>
            Отзывы
          </Title>
          <FeedbackList />
        </Box>
      </Container>
    </>
  )
}
