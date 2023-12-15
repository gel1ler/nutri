import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import Image from 'next/image';
import ListFromText from '@/components/UI/text/ListFromText';

type TProps = {
    name: string,
    text: string,
    price: string,
    src: string
}

const SmallCard = ({ props }: { props: TProps }) => {
    return (
        <Box
            data-aos='fade-up'
            className='flex p-4 rounded-xl gap-4 drop-shadow-lg border bg-white max-w-sm overflow-hidden'
            borderColor='secondary.light'
        >
            <Box className='flex flex-col justify-between flex-grow gap-4'>
                <Box className='rounded-xl overflow-hidden relative drop-shadow-md aspect-video'>
                    <Image
                        src={props.src}
                        fill
                        alt='imh'
                        className='object-cover'
                    />
                </Box>
                <Typography variant='h5' gutterBottom textAlign='center'>
                    {props.name}
                </Typography>
                <ListFromText centered>
                    {props.text}
                </ListFromText>
                <Divider sx={{ width: '100%' }} />
                <Typography variant="h5" color="secondary.light" textAlign='center'>
                    {props.price}
                </Typography>
                <Button
                    color='secondary'
                    variant='contained'
                    className='w-fit'
                    size='small'
                    sx={{ borderRadius: 2, py: 1, px: 2, mx: 'auto' }}
                >
                    Записаться
                </Button>
            </Box>
        </Box>
    )
}

export default SmallCard