import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import redStar from '../assets/redStar.png';
import grayStar from '../assets/star.png';
import '../style/rating.css';

export default function Rating() {
	const { id } = useParams();
	const rate = data.find((rating) => rating.id === id);

	// Gestion des etoiles
	function setStars() {
		const stars = [];
		const totalStars = 5;
		const filledStars = rate.rating;

		for (let i = 1; i <= totalStars; i++) {
			const starImg =
				i <= filledStars ? (
					<img
						key={i}
						className="rating__content__item"
						src={redStar}
						alt="red stars"
					/>
				) : (
					<img
						key={i}
						className="rating__content__item"
						src={grayStar}
						alt="gray stars"
					/>
				);
			stars.push(starImg);
		}

		return stars;
	}

	const star = setStars();

	return (
		<div className="rating">
			<div className="rating__content">{star.map((star, index) => [star])}</div>
		</div>
	);
}
