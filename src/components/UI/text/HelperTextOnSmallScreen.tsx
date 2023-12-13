import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'

const HelperTextOnSmallScreen = ({ children }: { children: ReactNode }) => {
    return (
        <Typography
            variant="body2"
            color='GrayText'
            textAlign='center'
            data-aos='fade-up'
            sx={{ display: ['block', 'block', 'none'], mt: 1 }}
        >
            {children}
        </Typography>
    )
}

export default HelperTextOnSmallScreen