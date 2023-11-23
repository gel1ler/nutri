'use client'
import React, { ReactNode, FC } from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTrail, a } from '@react-spring/web'

const Trail: FC<{ open: boolean, children: ReactNode }> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 250 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className='trailsText' style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}


export default function Loader() {
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(true)
        setTimeout(() => {
            setLoading(false)
            document.body.classList.remove('loading')
        }, 1000)
    }, [])

    return (
        <Box
            className='w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-white transition-all duration-500'
            sx={{
                zIndex: 2000,
                opacity: loading ? 1 : 0,
                pointerEvents: 'none'
            }}
        >
            <Box
                className='flex items-end gap-4'
            >
                <Box
                    className='relative'
                    sx={{
                        width: ['150px', '200px',],
                        height: ['150px', '200px',]
                    }}
                >
                    <Image
                        id='loader-logo'
                        src='/logo/logo-small.svg'
                        fill
                        alt='Logo'
                    />
                </Box>
                <Trail open={open}>
                    <Typography variant='h2'>Анна</Typography>
                    <Typography variant='h2'>Бехтольд</Typography>
                </Trail>
            </Box>
        </Box >
    )
}