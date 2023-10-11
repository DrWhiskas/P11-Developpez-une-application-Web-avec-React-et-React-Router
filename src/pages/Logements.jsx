import React from 'react';
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Dropdown from '../components/Dropdown';
import Informations from '../components/Informations';
import Footer from '../components/Footer';
import Error from './Error';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import '../style/logements.css';

export default function Logements() {
	const { id } = useParams();
	const newdata = data.find((newdata) => newdata.id === id);

	if (!newdata) {
		return <Error />;
	}

	return (
		<>
			<Header />
			<Carrousel />
			<Informations />
			
			<div className="logement__dropdown">
				<Dropdown titles="Description" descriptions={newdata.description} />
				<Dropdown
					titles="Equippements"
					descriptions={
						<>
							<ul className="dropdown__list">
								{newdata.equipments.map((equipment, index) => (
									<li className="dropdown__list__item" key={index}>
										{equipment}
									</li>
								))}
							</ul>
						</>
					}
				/>
			</div>
			<Footer />
		</>
	);
}
