import { IColors, IFooterProps, IHeaderProps } from "./types";

export const colors: IColors = {
    primary: '#fff',
    secondary: '#e3e3e3',
    bg: '#efefef',
    // additional: '#678650'
}

export const headerProps: IHeaderProps = {
    type: 'scrolled',
    scrollHeight: 0.7,
    remHeight: 3,
    topHeader: true,
    withShadow: true,
    menu: true,
    links: true,
}




export const footerProps: IFooterProps = {
    type: 'simple',
    logo: true
}