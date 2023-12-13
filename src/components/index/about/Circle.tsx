import { Box, SxProps } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Circle = ({ src, sx }: { src: string, sx?: SxProps }) => {
    return (
        <Box
            className='rounded-full p-2 aspect-square'
            color='secondary.main'
            border={3}
            data-aos='fade-up'
            sx={sx}
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