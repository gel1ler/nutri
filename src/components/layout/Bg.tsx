import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Plx from 'react-plx'



const opData = [{
    start: 0,
    end: '100vh',
    properties: [
        {
            startValue: 0,
            endValue: 1,
            property: "opacity",
        }
    ]
}]

const data = [
    {
        start: 0,
        end: '300vh',
        properties: [
            {
                startValue: 0,
                endValue: -800,
                property: "translateY",
            },
        ]
    }
]

const Bg = () => {
    const arr = [
        {
            src: '/bg/avocado.png',
            coords: [424, 71]
        },
        {
            src: '/bg/brok.png',
            coords: [2, 7]
        },
        {
            src: '/bg/strawberry.png',
            coords: [2, 55]
        },
    ]
    return (
        <Plx parallaxData={opData}>
            <Box
                className='fixed -z-50 pointer-events-none top-0 left-0 w-screen opacity-25'
                sx={{
                    height: '200vh',
                    filter: 'blur(3px)'
                }}
            >
                {arr.map((i, key) =>
                    <Plx parallaxData={data} key={key}>
                        <Box
                            className='relative w-96 h-96'
                            sx={{
                                marginTop: i.coords[0] + 'px',
                                marginLeft: i.coords[1] + 'vw'
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
                    </Plx>
                )}
            </Box>
        </Plx>
    )
}

export default Bg