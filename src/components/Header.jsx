import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header(){
    return (
    <div>
        <nav className='Header-nav'>
            <Link to="/">
                <img src={logo} alt='Logo du site Kasa' className='nav-logo' />
            </Link>
            <div className='Header-content'>
                <Link className='Header-link'>
                    Accueil
                </Link>
                <Link className='Header-link'>
                    A Propos
                </Link>
            </div>
        </nav>
    </div>
    )
}