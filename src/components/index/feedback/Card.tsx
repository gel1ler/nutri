import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

type TProps = {
    name: string;
    text: string;
    photo?: string;
    service: string;
}

const Card = ({ props }: { props: TProps }) => {
    return (
        <Box
            data-aos='fade-up'
            className='p-4 rounded-xl drop-shadow-lg border bg-white aspect-video'
            borderColor='secondary.light'
            sx={{
                width: ['300px', '400px'],
            }}
        >
            <Box className='flex items-center gap-2'>
                <Image
                    src={props.photo ? props.photo : '/feedback/person.svg'}
                    alt='Фото человека'
                    width={80}
                    height={80}
                    className='aspect-square rounded-full overflow-hidden'
                />
                <Box>
                    <Typography variant='h5' color='secondary.dark'>
                        {props.name}
                    </Typography>
                    <Typography variant='body2' color='GrayText'>
                        {props.service}
                    </Typography>
                </Box>
            </Box>
            <Typography className='pl-2'>
                {props.text}
            </Typography>
        </Box>
    )
}

export default Card