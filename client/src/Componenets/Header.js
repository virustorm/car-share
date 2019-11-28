import React from 'react';
import { Link } from 'react-router-dom';
// import Mug from '../assets/icons/mug-hot-solid.svg';
import Logo from '../assets/icons/autoprefixer-brands.svg';

export default function Header() {
	return (
		<nav className="navbar navbar-dark header">
			<Link className="header__home" to="/">
				<img className="header__logo" src={Logo} alt="mug" />
				<h4>eroCar</h4>
			</Link>
			<Link className="header__goHome" to="/">
				Home
			</Link>
		</nav>
	);
}
