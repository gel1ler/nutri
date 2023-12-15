import { centeredOnSmallScreen } from '@/customization/theme/ThemeOptions'
import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'

const Title = ({ children, centered }: { children: ReactNode, centered?: boolean }) => {
    return (
        <Typography
            variant='h3'
            color='secondary'
            data-aos='fade-up'
            textAlign={centered ? 'center' : 'left'}
            sx={centered ? null : centeredOnSmallScreen()}
        >
            {children}
        </Typography >
    )
}

export default Title