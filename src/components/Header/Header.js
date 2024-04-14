import './header.css'
import React, { useTransition } from 'react'
import Nav from '../Nav/Nav'
import logo from '../logo.png'
import { useTranslation } from 'react-i18next'



export default function Header() {
    const { t } = useTranslation()
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