import { Box } from '@mui/material'
import React from 'react'
import Slide from './Slide';

type TProps = {
    data: {
        name: string;
        service: string;
        text: string;
        photo?: string;
    }[]
}

const Slider = ({ data }: TProps) => {
    const slidesGap = 20
    const slideWidth = 400 - slidesGap / 2

    return (
        <Box className='w-screen overflow-x-scroll snap-x snap-mandatory flex'>
            {data.map((slideData, key) =>
                <Slide
                    key={key}
                    data={slideData}
                    width={slideWidth}
                />
            )}
        </Box>
    )
}

export default Slider