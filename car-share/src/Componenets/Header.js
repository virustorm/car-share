import React from 'react';
import { Link } from 'react-router-dom';
import Mug from '../assets/icons/mug-hot-solid.svg';

export default function Header() {
	return (
		<nav className="navbar navbar-dark header">
			<Link className="header__home" to="/">
				<img className="header__logo" src={Mug} alt="mug" />
				<h4>MetroCar</h4>
			</Link>
		</nav>
	);
}
