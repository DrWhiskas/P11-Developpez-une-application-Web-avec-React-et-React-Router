import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style/header.css';

export default function Header() {
	const location = useLocation();
	return (
		<div>
			<nav className="header">
				<Link to="/">
					<img src={logo} alt="Logo du site Kasa" className="header__logo" />
				</Link>
				<div className="header__nav">
					<Link
						to="/"
						className={
							location.pathname === '/'
								? 'active header__nav__link'
								: 'header__nav__link'
						}
					>
						Accueil
					</Link>
					<Link
						to="/about"
						className={
							location.pathname === '/about'
								? 'active header__nav__link'
								: 'header__nav__link'
						}
					>
						A Propos
					</Link>
				</div>
			</nav>
		</div>
	);
}
