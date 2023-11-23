import React from 'react'
import { AppBar } from '@mui/material'
import Bar from '../headerBar/Bar'

const StaticHeader = () => {
    return (
        <AppBar
            position='static'
            sx={{
                height: '4rem'
            }}
        >
            <Bar />
        </AppBar>
    )
}

export default StaticHeader