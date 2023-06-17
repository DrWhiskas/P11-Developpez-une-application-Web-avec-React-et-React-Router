import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import BannerBackgroundPropo from '../assets/Banner2.png'

export default function Propos (){
    return (
        <>
            <Header />
            <Banner img={BannerBackgroundPropo} text='' />
            <Footer />
        </>
    )
 }
 