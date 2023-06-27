import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { useState } from "react"
import previousButton from '../assets/ArrowLeft.png'
import nextButton from '../assets/ArrowRight.png'
import syle from '../style/carrousel.css'

export default function Carrousel(){
    const { id } = useParams()
    const logement = data.find((logement) => logement.id == id)

    const [ currentIndex, setCurrentIndex] = useState(0)
    
    function previousSlide(){
       const isFirstSlide = currentIndex == 0
       const nexIndex = isFirstSlide ? logement.pictures.length -1 : currentIndex -1 
       setCurrentIndex(nexIndex)
    }

    function nextSlide(){
        const isLastSlide = logement.pictures.length - 1;
        const nexIndex = currentIndex == isLastSlide ? 0 : currentIndex + 1 
        setCurrentIndex(nexIndex)
        console.log(nexIndex)
    }
    return(
    <div className="carousel">
        <button className='carousel__button ' onClick={previousSlide}>
            <img src={ previousButton } />
        </button>
        <img src={logement.pictures[currentIndex]} alt="photo du logemment" />
        <button className='carousel__button right' onClick={nextSlide}>
            <img src={ nextButton } />
        </button>
    </div>
    )
}
/**
 * {logement.pictures.map((item, index) => (
            <img key={index} src={item} alt="photo du logement" />
        ))}
 */