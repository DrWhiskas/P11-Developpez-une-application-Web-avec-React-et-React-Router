import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import '../style/tag.css';

export default function Tag() {
	const { id } = useParams();
	const tag = data.find((tag) => tag.id === id);

	return (
		<div className="tags">
			{tag.tags.map((tag, index) => (
				<div className="tags__item" key={index}>
					{tag}
				</div>
			))}
		</div>
	);
}
