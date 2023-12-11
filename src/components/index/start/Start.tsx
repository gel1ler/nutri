'use client'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Fill from './bg/Fill'
import NavLinks from '../../layout/header/headerBar/NavLinks'
import Link from 'next/link'
import MyDrawer from '../../layout/header/drawer/MyDrawer'
import Plx from 'react-plx'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '../../icons/socialMediaIcons'
import { centeredOnSmallScreen } from '@/customization/theme/ThemeOptions'

const startParallax = [
    {
        start: 0,
        end: '50vh',
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity",
            }
        ]
    },
    {
        start: 0,
        end: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: -400,
                property: "translateY",
            },
        ]
    }
]

const Start = () => {
    return (
        <Plx parallaxData={startParallax}>
            <Box
                className='h-screen relative'
            >
                <Image
                    src='/1.jpg'
                    fill
                    alt='Background'
                    className='object-cover -z-50'
                />
                <Fill />
                <Box className='absolute right-10 top-10 cursor-pointer'>
                    <MyDrawer />
                </Box>
                <Box
                    className='h-full w-2/5 flex flex-col pt-10'
                    sx={{
                        width: ['100%', '100%', '70%', '40%'],
                        mx: ['20px', '20px', '5%', '10%']
                    }}
                >
                    <Box className='flex gap-20'>
                        <Link href='/' className='self-center justify-self-end'>
                            <Image
                                alt='Logo'
                                src='/logo/logo-small.svg'
                                width={60}
                                height={60}
                            />
                        </Link>
                        <NavLinks hoverType='color' />
                    </Box>
                    <Box className='flex flex-col gap-2' sx={{ mt: '20vh' }}>
                        <Typography variant='h2' sx={centeredOnSmallScreen({ fontWeight: [400, 'light'] })}>
                            Анна Бехтольд
                        </Typography>
                        <Typography
                            variant='h5'
                            color='secondary.main'
                            fontWeight='bold'
                            sx={centeredOnSmallScreen({ maxWidth: ['85%', '75%', '100%'] })}
                        >
                            Нутрициолог-специалист в области питания, а также восстановления и поддержания здоровья немедикаментозным способом
                        </Typography>
                        <Box className='w-80 flex flex-col items-center' sx={centeredOnSmallScreen()}>
                            <Box className='flex justify-around w-full mt-4'>
                                <PhoneCall icon />
                                <VkIcon />
                                <TelegramIcon />
                                <InstagramIcon />
                            </Box>
                            <Button
                                color='secondary'
                                variant='contained'
                                className='w-full'
                                sx={{ borderRadius: 5, py: '10px', mt: 1 }}>
                                Записаться на консультацию
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Plx>
    )
}

export default Start