import React, { ReactNode } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, Divider } from '@mui/material'
import Image from 'next/image'
import ListFromText from '@/components/UI/text/ListFromText'

type TProps = {
    name: string,
    text: string,
    price: string
}

const Text = ({ children }: { children: ReactNode }) => <Box className='inline-block' color='secondary.light' fontSize={24}>{children}</Box>

const LongCard = ({ props }: { props: TProps }) => {
    return (
        <Box
            data-aos='fade-up'
            className='flex p-4 rounded-xl gap-8 drop-shadow-lg shadow-lg border bg-white'
            borderColor='secondary.light'
            sx={{ gridColumn: '1/3' }}
        >
            <Box className='w-2/3 flex flex-col justify-between flex-grow pt-8 pl-8'>
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
                    <Typography data-aos-offset='20' data-aos='fade-up' variant="h6">
                        <Text>1 месяц - 20000 руб</Text> или <Text>3 месяца - 50000 руб</Text>
                    </Typography>
                    <Button data-aos-offset='20' data-aos='fade-up' color='secondary' variant='contained' className='w-fit' size='small' sx={{ borderRadius: 2, py: 1, px: 2, my: 2 }}>
                        Записаться
                    </Button>
                </Box>
            </Box>
            <Box className='w-1/3 rounded-xl overflow-hidden relative'>
                <Image
                    src='/cards/individual.jpg'
                    fill
                    alt='imh'
                    className='object-cover'
                />
            </Box>
        </Box>
    )
}

export default LongCard