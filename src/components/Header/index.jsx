import { useState } from 'react'

import './style.scss'
import './responsive.scss'

export const Header = () => {
    const [hamburgerIsActive, setHamburgerIsActive] = useState(true)

    const handdleHamgurger = () => {
        const button = document.getElementsByClassName('hamburger')[0]
        const nav = document.getElementsByClassName('header__nav')[0]
        
        setHamburgerIsActive(!hamburgerIsActive)
        
        if (hamburgerIsActive) {
            button.classList.add('hamburger--active')
            nav.classList.add('nav--menu-active')
        } else {
            button.classList.remove('hamburger--active')
            nav.classList.remove('nav--menu-active')
        }
    }
    
    return (
        <header className="header">
            <div className='header__container'>
                <img className="header__logo" src="/assets/logo.png" alt="logo-figma-land" />
                <nav className="header__nav">
                    <a className="nav__link" href="/">Home</a>
                    <a className="nav__link" href="/">Product</a>
                    <a className="nav__link" href="/">About</a>
                    <a className="nav__link" href="/">Contact</a>
                </nav>
                <a href='/' className='header__button--login'>Login</a>
                <div className='hamburger' onClick={handdleHamgurger} >
                    <div className='hamburger__line line--1'></div>
                    <div className='hamburger__line line--2'></div>
                    <div className='hamburger__line line--3'></div>
                </div>
            </div>
        </header>
    )
}