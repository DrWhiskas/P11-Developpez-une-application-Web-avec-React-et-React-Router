import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import { useState } from 'react';
import previousButton from '../assets/ArrowLeft.png';
import nextButton from '../assets/ArrowRight.png';
import '../style/carrousel.css';

export default function Carrousel() {
	const { id } = useParams(); //Extraire l'id de l'URL
	const logement = data.find((logement) => logement.id == id); //Cherche l'id correspoondant 

	const [currentIndex, setCurrentIndex] = useState(0); //Gère l'etat currentindex

	/* GESTION DES SLIDES */
	function previousSlide() {
		const isFirstSlide = currentIndex == 0;
		const nexIndex = isFirstSlide
			? logement.pictures.length - 1
			: currentIndex - 1;
		setCurrentIndex(nexIndex); //Met à jour currentIndex
	}

	function nextSlide() {
		const isLastSlide = logement.pictures.length - 1;
		const nexIndex = currentIndex == isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(nexIndex);
	}

	return (
		<div className="carousel">
			<div className="carousel__button__content">
				<button className="carousel__button left" onClick={previousSlide}>
					<img className="carousel__button__arrow" src={previousButton} />
				</button>
				<button className="carousel__button right" onClick={nextSlide}>
					<img className="carousel__button__arrow" src={nextButton} />
				</button>
			</div>
			<img
				src={logement.pictures[currentIndex]}
				className="carousel__img"
				alt="photo du logemment"
			/>
		</div>
	);
}
