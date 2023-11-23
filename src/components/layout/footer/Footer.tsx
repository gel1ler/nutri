import React, { ReactNode } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '@/components/icons/socialMediaIcons'

const Text = ({ href, children }: { href: string, children: ReactNode }) =>
    <Link href={href}>
        <Typography className=' transition-colors' sx={{ ':hover': { color: 'secondary.main' } }}>
            {children}
        </Typography>
    </Link>

const Footer = () => {
    return (
        <Box
            className='p-10 pt-20 flex flex-col gap-2 justify-between bg-gray-100'
        >
            <Container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
                }}
            >
                <Box className='flex flex-col gap-4'>
                    <Image
                        src='/logo/logo-horizontal.svg'
                        width={250}
                        height={100}
                        alt='logo'
                        className='mb-2'
                    />
                    <PhoneCall big />
                    <Box className='flex justify-between w-1/2'>
                        <VkIcon />
                        <TelegramIcon />
                        <InstagramIcon />
                    </Box>
                </Box>
                <Box className='flex flex-col gap-6'>
                    <Typography variant='h5'>
                        Информация
                    </Typography>
                    <Text href='#about_anchor'>Обо мне</Text>
                    <Text href='/agreement'>Пользовательское соглашение</Text>
                    <Text href='#about_anchor'>Персональные данные</Text>
                    <Text href='#about_anchor'>Публичная оферта</Text>
                </Box>
                <Box className='flex flex-col gap-6'>
                    <Typography variant='h5'>
                        Услуги
                    </Typography>
                    <Text href='#services_anchor'>Знакомство/звонок</Text>
                    <Text href='#services_anchor'>Разовая консультация</Text>
                    <Text href='#services_anchor'>Индивидуальное сопровождение</Text>
                </Box>
                <Typography variant='body2' mt={5} sx={{ gridColumn: '1/4', color: 'GrayText' }}>
                    © Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на источник: www.domainname.ru
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer