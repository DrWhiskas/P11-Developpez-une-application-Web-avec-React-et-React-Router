import React from 'react'
import { Link } from 'react-router-dom'
import BannerBackground from '../assets/BannerBackground.png'

export default function Banner(){
    return (
        <div className='Banner'>
            <h2 className='=Banner-slogan'>
                Chez vous, partout et ailleurs
            </h2>
            <img src={ BannerBackground } alt='Logo du site Kasa' className='nav-logo' />
        </div>
    )
}