import './header.css'
import React from 'react'
import Nav from '../Nav/Nav'
import logo from '../logo.png'



export default function Header() {
        return (
        <div className="header">
            <div className="header__content">
                <div className="header__logo">
                    <img  src={logo} alt="header logo" />
                </div>
                <div className="header__nav">
                    <Nav />
                </div>
            </div>
        </div>
    )
}