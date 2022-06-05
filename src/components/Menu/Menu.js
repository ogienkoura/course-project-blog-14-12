import React from 'react'
import './Menu.scss'

export const Menu = () => {
    return (
        <ul className="menu">
            <li className="menu__item">
                <a href="#/">Home</a>
            </li>
            <li className="menu__item">
                <a href="#/">News</a>
            </li>
            <li className="menu__item">
                <a href="#/">Lifestyle</a>
            </li>
            <li className="menu__item">
                <a href="#/">Places</a>
            </li>
            <li className="menu__item">
                <a href="#/">About Us</a>
            </li>
            <li className="menu__item">
                <a href="#/">Contact</a>
            </li>
        </ul>
    )
}
