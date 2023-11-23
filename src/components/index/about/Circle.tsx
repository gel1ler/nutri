import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Circle = ({ src }: { src: string }) => {
    return (
        <Box
            className='rounded-full p-2 aspect-square'
            color='secondary.main'
            border={3}
            data-aos='fade-up'
        >
            <Image
                src={src}
                width={70}
                height={70}
                alt='Icon'
            />
        </Box>
    )
}

export default Circle