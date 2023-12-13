import React, { ReactNode } from 'react'
import { Box, Container, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '@/components/icons/socialMediaIcons'
import { centeredOnSmallScreen } from '@/customization/theme/ThemeOptions'

const Text = ({ href, children }: { href: string, children: ReactNode }) =>
    <Link href={href}>
        <Typography className=' transition-colors' sx={{ ':hover': { color: 'secondary.main' } }}>
            {children}
        </Typography>
    </Link>

const Footer = () => {
    return (
        <Box className='bg-gray-100 p-4'>
            <Container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
                    gap: 4,
                    mt: 5
                }}
            >
                <Box className='flex flex-col gap-4 items-center'>
                    <Image
                        src='/logo/logo-horizontal.svg'
                        width={220}
                        height={100}
                        alt='logo'
                        className='mb-2 object-cover'
                    />
                    <PhoneCall big />
                    <Box className='flex justify-between w-1/2' sx={{ maxWidth: '250px' }}>
                        <VkIcon />
                        <TelegramIcon />
                        <InstagramIcon />
                    </Box>
                </Box>
                <Box className='flex flex-col gap-6' sx={centeredOnSmallScreen()}>
                    <Typography variant='h5'>
                        Информация
                    </Typography>
                    <Text href='#about_anchor'>Обо мне</Text>
                    <Text href='/agreement'>Пользовательское соглашение</Text>
                    <Text href='#about_anchor'>Персональные данные</Text>
                    <Text href='#about_anchor'>Публичная оферта</Text>
                </Box>
                <Box className='flex-col gap-6' sx={{ display: ['none', 'none', 'flex'] }}>
                    <Typography variant='h5'>
                        Услуги
                    </Typography>
                    <Text href='#services_anchor'>Знакомство/звонок</Text>
                    <Text href='#services_anchor'>Разовая консультация</Text>
                    <Text href='#services_anchor'>Индивидуальное сопровождение</Text>
                </Box>
                <Divider sx={{ gridColumn: ['', '', '1/4'] }} />
                <Typography variant='body2' mb={1} textAlign='center' sx={{ gridColumn: ['', '', '1/4'], color: 'GrayText' }}>
                    © Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на источник: www.domainname.ru
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer