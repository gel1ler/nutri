import { Box, Typography } from '@mui/material'
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

const Why = () => {
    return (
        <Box className='mt-10'>
            <Box className='flex flex-col items-center'>
                {arr.map((i, key) =>
                    <Box key={key} className='grid' sx={{ gridTemplateColumns: '1fr 200px 1fr' }}>
                        {key % 2 === 0 ?
                            <Typography data-aos='fade-up' variant='h5' textAlign='right'>
                                {i.text}
                            </Typography>
                            : <Box />
                        }
                        <Box className='flex flex-col items-center'>
                            <Circle src={i.icon} />
                            {key < arr.length - 1 ? <Box className='w-1 h-24' bgcolor='secondary.main' data-aos='fade-up' /> : null}
                        </Box>
                        {key % 2 === 1 ?
                            <Typography data-aos='fade-up' variant='h5'>
                                {i.text}
                            </Typography>
                            : <Box />
                        }
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Why