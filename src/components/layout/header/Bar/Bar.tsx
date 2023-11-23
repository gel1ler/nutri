import { headerProps } from '@/customization/customization'
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
      <Box className='flex gap-20 w-full justify-between' sx={{ ml: '10%' }}>
        <Link href='/' className='self-center justify-self-end'>
          <Image
            alt='Logo'
            src='/logo/logo-small.svg'
            width={60}
            height={60}
          />
        </Link>
        <Box className='w-1/3 my-auto'>
          <NavLinks hoverType='color' />
        </Box>
        <Box className='flex items-center gap-8'>
          <PhoneCall />
          <MyDrawer />
        </Box>
      </Box>
    </Toolbar >
  )
}

export default Bar