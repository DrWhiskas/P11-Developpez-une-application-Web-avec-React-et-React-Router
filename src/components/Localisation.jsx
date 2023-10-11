import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import '../style/localisation.css';

export default function Localisation() {
	/*
  const [localisations, setLocalisations] = useState([]);
  useEffect(() => {
    setLocalisations(data);
  }, []);
*/
	return (
		<div className="localisation">
			<div className="localisation__container">
				{data.map((localisation) => (
					<div key={localisation.id} className="localisation__card">
						<Link to={`/localisation/${localisation.id}`}>
							<p className="localisation__card__title">{localisation.title}</p>
							<img
								src={localisation.cover}
								alt="Logo du site Kasa"
								className="localisation__card__cover"
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
