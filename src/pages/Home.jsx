import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Localisation from '../components/Localisation'
import BannerBackground from '../assets/BannerBackground.png'



 export default function Home (){
    return (
        <>
            <Header />
            <Banner img={ BannerBackground } text='Chez vous, partout et ailleurs' />
            <Localisation />
            <Footer />
        </>
    )
 }