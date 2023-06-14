import React from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '../assets/logoWhite.png'

export default function Footer(){
    return (
    <div>
        <footer className='footer'>
            <Link to="/">
                <img src={ logoWhite } alt='Logo du site Kasa' className='footer-logo' />
            </Link>
            <p className='footer-content'>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    </div>
    )
}

