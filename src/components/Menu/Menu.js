import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

export const Menu = () => {
    return (
        <ul className="menu">
            <li className="menu__item">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/news">News</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/lifestyle">Lifestyle</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/places">Places</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}
