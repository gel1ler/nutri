import { Box } from '@mui/material'
import React from 'react'

type TProps = {
    data: {
        name: string;
        service: string;
        text: string;
        photo?: string;
    },
    width: number;
}

const Slide = ({ data, width }: TProps) => {
    return (
        <Box
            className='p-4 rounded-xl drop-shadow-lg border bg-white aspect-video snap-center'
            borderColor='secondary.light'
            sx={{
                width: width + 'px',
            }}
        >
            {data.name}
        </Box>
    )
}

export default Slide