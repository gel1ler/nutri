import React from 'react'
import { headerProps } from '@/customization/customization'

import ScrolledHeader from './types/ScrolledHeader'

const Header = () => {
    switch (headerProps.type) {
        case 'scrolled':
            return <ScrolledHeader />
    }
}

export default Header