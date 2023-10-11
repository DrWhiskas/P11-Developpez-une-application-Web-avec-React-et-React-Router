import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import '../style/information.css';

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
			</div>
			<div className="informations__host">
				<span className="informations__host__name">
					{informations.host.name}
				</span>
				<img
					className="informations__host__picture"
					src={informations.host.picture}
					alt="picture of host"
				/>
			</div>
		</div>
	);
}
