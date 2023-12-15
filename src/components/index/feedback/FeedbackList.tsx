import { Box } from '@mui/material'
import React from 'react'
import Card from './Card'
import Slider from '@/components/UI/slider/Slider'

const arr = [
    {
        name: 'Александр',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi nihil tempora ab veniam eum hic fugiat deserunt libero soluta.',
        service: 'Индивидуальное сопровождние'
    },
    {
        name: 'Евгений',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi nihil tempora ab veniam eum hic fugiat deserunt libero soluta.',
        service: 'Разовая консультация'
    },
    {
        name: 'Евгений',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi nihil tempora ab veniam eum hic fugiat deserunt libero soluta.',
        service: 'Разовая консультация'
    },
    {
        name: 'Евгений',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi nihil tempora ab veniam eum hic fugiat deserunt libero soluta.',
        service: 'Разовая консультация'
    },
]

const FeedbackList = () => {
    return (
        <Box className='flex mt-10 gap-5 items-center'>
            {/* {arr.map((i, key) =>
                <Card key={key} props={i} />
            )} */}
            <Slider
                data={arr}
            />
        </Box>
    )
}

export default FeedbackList