import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logoWhite.png';
import '../style/footer.css';

export default function Footer() {
	return (
		<div>
			<footer className="footer">
				<Link to="/">
					<img
						src={logoWhite}
						alt="Logo du site Kasa"
						className="footer__logo"
					/>
				</Link>
				<p className="footer__text">© 2020 Kasa. All rights reserved</p>
			</footer>
		</div>
	);
}
