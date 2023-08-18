import { useState } from 'react'

import './style.scss'
import './responsive.scss'
import { useEffect } from 'react'

export const Header = () => {
    const [hamburgerIsActive, setHamburgerIsActive] = useState(true)

    useEffect(() => {
        const nav = document.getElementsByClassName('header__nav')[0]
        if (hamburgerIsActive) {
            nav.classList.add('hamburger--active')
        } else {
            nav.classList.remove('hamburger--active')
        }
    }, [hamburgerIsActive])

    return (
        <header className="header">
            <div className='header__container'>
                <img className="header__logo" src="/assets/logo.png" alt="logo-figma-land" />
                <nav className="header__nav hamburger--active">
                    <a className="nav__link" href="/">Home</a>
                    <a className="nav__link" href="/">Product</a>
                    <a className="nav__link" href="/">About</a>
                    <a className="nav__link" href="/">Contact</a>
                </nav>
                <a href='/' className='header__button--login'>Login</a>
                <div className='hamburger' onClick={() => setHamburgerIsActive(value => !value)} >
                    <div className='hamburger__line line--1'></div>
                    <div className='hamburger__line line--2'></div>
                    <div className='hamburger__line line--3'></div>
                </div>
            </div>
        </header>
    )
}