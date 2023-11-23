import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardMedia, Divider, SxProps } from '@mui/material';
import Image from 'next/image';
import ListFromText from '@/components/UI/text/ListFromText';

type TProps = {
    name: string,
    text: string,
    price: string,
    src?: string
}

const MyCard = ({ props }: { props: TProps }) => {
    return (
        <Box
            data-aos='fade-up'
            className='flex p-4 rounded-xl gap-4 drop-shadow-lg border bg-white'
            borderColor='secondary.light'
        >
            <Box className='w-2/3 flex flex-col justify-between flex-grow pt-4 pl-4'>
                <Box>
                    <Typography data-aos='fade-up' variant='h5' gutterBottom>
                        {props.name}
                    </Typography>
                    <ListFromText>
                        {props.text}
                    </ListFromText>
                </Box>
                <Box>
                    <Divider sx={{ my: 2, width: '100%' }} />
                    <Typography data-aos-offset='20' data-aos='fade-up' variant="h5" color="secondary.light">
                        {props.price}
                    </Typography>
                    <Button data-aos-offset='20' data-aos='fade-up' color='secondary' variant='contained' className='w-fit' size='small' sx={{ borderRadius: 2, py: 1, px: 2, my: 2 }}>
                        Записаться
                    </Button>
                </Box>
            </Box>
            <Box className='w-1/3 rounded-xl overflow-hidden relative'>
                <Image
                    src={props.src!}
                    fill
                    alt='imh'
                    className='object-cover'
                />
            </Box>
        </Box>
    )
}

export default MyCard