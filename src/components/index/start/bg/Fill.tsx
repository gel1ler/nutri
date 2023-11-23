'use client'
import { Box } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import React from 'react'

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const Fill = () => {
    const theme = useTheme()
    const rgb = hexToRgb(theme.palette.background.default);

    return (
        <Box
            className='w-full h-full absolute left-0 top-0 -z-40'
            sx={{
                background: `linear-gradient(to bottom, transparent 90%, white)`,
            }}
        />
    )
}

export default Fill