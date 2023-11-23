'use client'
import React, { useCallback } from 'react'
import { Typography, } from '@mui/material'
import { useSnackbar } from 'notistack'
import { mainInfo } from '@/content/content'
import Link from 'next/link'

const phone = mainInfo.phone
const email = mainInfo.email
const location = mainInfo.location

export default function DoLink({ type }: { type: 'email' | 'phone' | 'location' }) {
    const { enqueueSnackbar } = useSnackbar()
    const copyLink = (text: string, msg: string) => {
        navigator.clipboard.writeText(text)
        enqueueSnackbar(msg)
    }

    const phoneClick = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = 'tel:' + phone
        }
        else {
            copyLink(phone, 'Номер телефона скопирован')
        }
    }

    let
        text: string,
        f: any,
        href: string

    switch (type) {
        case 'phone':
            text = phone
            f = phoneClick
            break
        case 'email':
            text = email
            f = () => copyLink(email, 'Адрес электронной почты скопирован')
            break
        case 'location':
            text = location.point
            href = location.href
            break
    }

    return (
        <Typography onClick={f ? f : null} fontWeight='fontWeightBold'>
            {href ?
                <Link href={href}>
                    {text}
                </Link>
                : text}
        </Typography>
    )
}
