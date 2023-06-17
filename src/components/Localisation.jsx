import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data.json'
import '../style/localisation.css'

export default function Localisation() {
  // Utilisation des données dans l'état local
  const [localisations, setLocalisations] = useState([]);

  useEffect(() => {
    // Mettre à jour l'état local avec les données du fichier JSON
    setLocalisations(data);
  }, []);

  // Utilisation des données dans le rendu JSX
  return (
    <div className='localisation'>
      <div className='localisation__container'>
        {localisations.map((localisation) => (
        <div key={localisation.id} className='localisation__card'>
          <Link to={`/localisation/${localisation.id}`}>
            <p className='localisation__card__title'>{localisation.title}</p>
            <img src={ localisation.cover } alt='Logo du site Kasa' className='localisation__card__cover' />
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
}