import { Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import { PhoneCall, TelegramIcon, VkIcon } from '@/components/icons/socialMediaIcons'
import MyDrawer from '../drawer/MyDrawer'
import Link from 'next/link'
import NavLinks from './NavLinks'

const Bar = ({ }) => {

  return (
    <Toolbar sx={{ height: '4rem' }}>
      <Box className='flex w-full justify-between' sx={{ ml: ['10px', '10%'] }}>
        <Link href='/' className='self-center justify-self-end'>
          <Image
            alt='Logo'
            src='/logo/logo-small.svg'
            width={60}
            height={60}
            style={{ minWidth: '60px' }}
          />
        </Link>
        <Box className='my-auto'>
          <NavLinks hoverType='color' />
        </Box>
        <Box className='flex items-center gap-8'>
          <Box sx={{ display: ['none', 'block'] }}>
            <PhoneCall />
          </Box>
          <MyDrawer />
        </Box>
      </Box>
    </Toolbar >
  )
}

export default Bar