import React from 'react'
import './Logo.scss'
import logo from 'assets/main-logo.png'

export const Logo = () => {
    return (
        <>
            <a className="header__logo" href="#/">
                <img src={logo} alt="" />
                <h2>Skate Blog</h2>
            </a>
        </>
    )
}
