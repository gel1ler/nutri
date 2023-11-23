'use client'
import React, { useEffect, useState } from 'react'
import { AppBar } from '@mui/material'
import Bar from '../bar/Bar'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { headerProps } from '@/customization/customization'
import NavLinks from '../bar/NavLinks'

const scrollHeight: number | undefined = headerProps.scrollHeight

const ScrolledHeader = () => {
    const [height, setHeight] = useState<number>(0)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => setHeight(window.innerHeight), [])

    useScrollPosition(({ prevPos, currPos }) => {
        if (typeof scrollHeight === 'number') {
            let y: number = -currPos.y
            if (y >= height * scrollHeight) {
                setIsActive(true)
            }
            if (y < height * scrollHeight) {
                setIsActive(false)
            }
        }
    })

    return (
        <AppBar
            position={'fixed'}
            sx={{
                height: '4rem',
                transition: 'opacity .3s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'all' : 'none'
            }}
        >
            <Bar />
        </AppBar>
    )
}

export default ScrolledHeader