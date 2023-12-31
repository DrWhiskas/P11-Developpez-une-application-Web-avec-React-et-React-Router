import React from 'react';
import { Link } from 'react-router-dom';
import '../style/banner.css';

export default function Banner({ img, text }) {
	return (
		<div className="banner">
			<div className="banner__content">
				<img
					src={img}
					alt="Logo du site Kasa"
					className="banner__content__img gray-filter"
				/>
			</div>
			<h2 className="banner__slogan">{text}</h2>
		</div>
	);
}
