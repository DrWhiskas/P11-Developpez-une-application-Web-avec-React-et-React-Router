import React from 'react'
import { Link } from 'react-router-dom'
import BannerBackground from '../assets/BannerBackground.png'
import '../style/banner.css'

export default function Banner(){
    return (
        <div className='banner'>
            <div className='banner__content'>
                <img src={ BannerBackground } alt='Logo du site Kasa' className='banner__content__img gray-filter' />
            </div>
                <h2 className='banner__slogan'>
                    Chez vous, partout et ailleurs
                </h2>
        </div>
    )
}