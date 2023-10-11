import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import '../style/information.css';

import Rating from './Rating';
import Tag from './Tag';

export default function Informations() {
	const { id } = useParams();
	const informations = data.find((informations) => informations.id === id);

	return (
		<div className="informations">
			<div className="informations__localisation">
				<h2 className="informations__localisation__title">
					{informations.title}
				</h2>
				<h4 className="informations__localisation__region">
					{informations.location}
				</h4>
				<Tag />
			</div>

			<div className="informations__host">
				<div className="informations__host__content">
					<span className="informations__host__content__name">
						{informations.host.name}
					</span>
					<img
						className="informations__host__content__picture"
						src={informations.host.picture}
						alt="picture of host"
					/>
				</div>
				<Rating />
			</div>
		</div>
	);
}
