'use client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'
import { Roboto } from 'next/font/google'
import { themeOptions } from './ThemeOptions'
import { useEffect, useState } from 'react'
import Loading from '@/components/layout/loader'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic', 'latin']
})

const theme = createTheme(themeOptions)

export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}