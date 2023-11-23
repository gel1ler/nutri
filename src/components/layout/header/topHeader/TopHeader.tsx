'use client'
import React from 'react'
import Box from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import { SnackbarProvider } from 'notistack'
import styled from '@emotion/styled'
import DoLink from './DoLink'

const StyledSnackbarProvider = styled(SnackbarProvider)(`
&.SnackbarItem-contentRoot {
  background-color: #eeeeee;
  font-size: 25px;
  color: black
}
`)

const TopHeader = ({ noBg }: { noBg?: boolean }) => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <StyledSnackbarProvider maxSnack={4} autoHideDuration={3000}>
            <Box
                className={`w-screen p-1 justify-items-center grid z-100 ${noBg ? null : 'bg-slate-200'}`}
                sx={{
                    gridTemplateColumns: ['', '', 'repeat(3, 1fr)'],
                }}>
                {isMd ?
                    null
                    :
                    <DoLink type='email' />
                }
                <DoLink type='phone' />
                {isMd ?
                    null
                    :
                    <DoLink type='location' />
                }
            </Box>
        </StyledSnackbarProvider>
    )
}

export default TopHeader
