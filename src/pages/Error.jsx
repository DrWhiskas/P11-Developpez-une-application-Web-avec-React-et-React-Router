import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Error(){
    return(
        <>
        <Header />
        <div className="error">
            <div className="error__header">
                404
            </div>
            <div className='error__content'>
                Oups! La page que vous demandez n'existe pas.
            </div>
            <div className="error__footer">
                <Link to='/'>
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </div>
        <Footer />
        </>
    )
}