import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Circle from './Circle'

const arr = [
    {
        text: 'У вас постоянная усталость, дискомфорт в теле, раздражительность, ищите решение',
        icon: '/icons/sas/low-battery.svg'
    },
    {
        text: 'Устали покупать абонементы в фитнес зал и бросать',
        icon: '/icons/sas/dumbbell-gym.svg'
    },
    {
        text: 'Есть конкретная болезнь, которую вы давно не можете вылечить у себя или близкого человека',
        icon: '/icons/sas/health.svg'
    },
    {
        text: 'Вы смотрите на девушек с красивыми фигурами и хотите себе такую же',
        icon: '/icons/sas/waist.svg'
    },
    {
        text: 'Вам необходимо выстроить сбалансированный рацион питания для себя и своих близких',
        icon: '/icons/sas/apple.svg'
    },
    {
        text: 'Вы устали от постоянной тяги к сладкому , мучным продуктам, зависимости от кофе',
        icon: '/icons/sas/coffee.svg'
    },
]

const smallCardWidth = 300

const Vertical = ({ num, i }: { num: number, i: { text: string, icon: string } }) =>
    <Box className='grid' sx={{ gridTemplateColumns: '1fr 200px 1fr' }}>
        {num % 2 === 0 ?
            <Typography data-aos='fade-up' variant='h5' textAlign='right'>
                {i.text}
            </Typography>
            : <Box />
        }
        <Box className='flex flex-col items-center'>
            <Circle src={i.icon} />
            {num < arr.length - 1 ? <Box className='w-1 h-24' bgcolor='secondary.main' data-aos-offse='20' data-aos='fade-up' /> : null}
        </Box>
        {num % 2 === 1 ?
            <Typography data-aos='fade-up' variant='h5'>
                {i.text}
            </Typography>
            : <Box />
        }
    </Box>

const Horizontal = ({ i }: { i: { text: string, icon: string } }) =>
    <Box className='flex flex-col gap-1' sx={{ width: smallCardWidth + 'px' }}>
        <Box className='flex items-center'>
            <Circle src={i.icon} sx={{ mx: 'auto' }} />
        </Box>
        <Typography data-aos='fade-up' variant='h5' textAlign='center'>
            {i.text}
        </Typography>
    </Box>

const Why = () => {
    return (
        <Box
            className='relative'
            sx={{
                width: ['100vw', '100vw', 'auto']
            }}
        >
            <Box
                className='w-1/3 absolute h-full bg-gradient-to-r from-white to-transparent left-0 top-0 z-50'
                sx={{
                    width: ['25%', '33%'],
                    display: ['block', 'block', 'none']
                }}
            />
            <Box
                className='w-1/3 absolute h-full bg-gradient-to-r from-transparent to-white right-0 top-0 z-50'
                sx={{
                    width: ['25%', '33%'],
                    display: ['block', 'block', 'none']
                }}
            />
            <Box
                className='my-5 relative pb-4 w-full'
                sx={{
                    overflowX: ['scroll', 'scroll', 'hidden'],
                    overflowY: 'hidden',
                }}
            >
                <Box className='flex-col items-center' sx={{ display: ['none', 'none', 'flex'] }}>
                    {arr.map((i, key) => <Vertical key={key} i={i} num={key} />)}
                </Box>
                <Box
                    className='w-full'
                    sx={{
                        gap: '25px',
                        display: ['flex', 'flex', 'none'],
                        width: `${smallCardWidth * arr.length}px`,
                        mx: `calc(50vw - ${smallCardWidth / 2}px)`
                    }}
                >
                    {arr.map((i, key) => <Horizontal key={key} i={i} />)}
                </Box>
            </Box>
        </Box>
    )
}

export default Why