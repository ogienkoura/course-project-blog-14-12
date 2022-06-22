import React from 'react'
import './Logo.scss'
import logo from 'assets/main-logo.png'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
    return (
        <>
            <NavLink to="/" className="header__logo">
                <img src={logo} alt="" />
                <h2>Skate Blog</h2>
            </NavLink>
        </>
    )
}
