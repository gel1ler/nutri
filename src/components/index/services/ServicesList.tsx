'use client'
import { Box, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import MyCard from './MyCard'
import LongCard from './LongCard'
import SmallCard from './SmallCard'

const arr = [
    {
        name: 'Знакомство/звонок',
        text: 'Разберем ваш вопрос и выберем подходящий вариант работы',
        price: '25 минут - бесплатно',
        src: '/cards/call2.jpg'
    },
    {
        name: 'Разовая  консультация',
        text: `q- анкета (сбор анамнеза и оценка состояния)
            q- разбор анализов
            q- рекомендации по одному из ваших запросов, включая персональные рекомендации по рациону и дальнейшей терапии
            q- консультация проходит в формате видео встречи`,
        price: '45 минут - 4000 руб.',
        src: '/cards/consult.jpg'
    },
    {
        name: 'Индивидуальное сопровождение',
        text: `q-анкета (сбор анамнеза оценка состояния)
        q- разбор анализов
        q- персональные рекомендации по питанию 
        q- подбор нутрицивтической поддержи с учётом анамнеза и анализов
        q- обратная связь: пн-пт 10.00-18.30 (переписка + созвон 2 раза в неделю по 30 минут)
        q- контроль состояния и анализов (динамика) по окончании программы (только 3-х месячной)`,
        price: '1 месяц - 20000 руб | 3 месяца - 50000 руб',
        src: '/cards/individual.jpg'
    }
]

const ServicesList = () => {
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('md'))


    return (
        isLg ?
            <Box className='grid mt-10 gap-5' sx={{ gridTemplateColumns: '1fr 1fr' }}>
                {arr.map((i, key) =>
                    key === 2 ?
                        <LongCard key={key} props={i} />
                        :
                        <MyCard key={key} props={i} />

                )}
            </Box>
            :
            <Box className='flex flex-col mt-10 gap-5 items-center'>
                {arr.map((i, key) =>
                    <SmallCard key={key} props={i} />
                )}
            </Box>
    )
}

export default ServicesList