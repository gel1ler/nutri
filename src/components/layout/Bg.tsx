'use client'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Plx from 'react-plx'

const opData = [
    {
        start: 0,
        end: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: 1,
                property: "opacity",
            },
        ]
    },
    {
        start: 0,
        duration: '400vh',
        properties: [
            {
                startValue: 0,
                endValue: -1000,
                property: "translateY",
            },
        ]
    }
]

const arr = [
    {
        src: '/bg/avocado.png',
        coords: [7, 15]
    },
    {
        src: '/bg/brok.png',
        coords: [60, 15]
    },
]

const Bg = () => {
    return (
        <Box sx={{ display: ['none', 'none', 'block'] }}>
            <Box
                className='fixed -z-50 pointer-events-none top-0 left-0 w-screen opacity-20'
                sx={{
                    height: '200vh',
                    filter: 'blur(3px)'
                }}
            >
                <Plx parallaxData={opData} animateWhenNotInViewport>
                    <Box>
                        {arr.map((i, key) =>
                            <Box
                                key={key}
                                className='relative w-96 h-96'
                                sx={{
                                    transform: `translate(${i.coords[0]}vw, ${i.coords[1]}vw)`,
                                }}
                            >
                                <Image
                                    key={key}
                                    className='object-contain'
                                    src={i.src}
                                    fill
                                    alt='Bg element'
                                />
                            </Box>
                        )}
                    </Box>
                </Plx>
            </Box>
        </Box >
    )
}

export default Bg