import React from 'react';
import { Link } from 'react-router-dom';
// import Mug from '../assets/icons/mug-hot-solid.svg';
import Logo from '../assets/icons/autoprefixer-brands.svg';

export default function Header() {
	function logOut() {
		localStorage.removeItem('token');
	}

	let checkToken = JSON.parse(localStorage.getItem('token'));
	if (checkToken === null || checkToken === undefined) {
		return (
			<nav className="navbar navbar-dark header">
				<Link className="header__home" to="/">
					<img className="header__logo" src={Logo} alt="mug" />
					<h4>eroCar</h4>
				</Link>
				<div>
					<Link className="header__goHome" to="/">
						Home
					</Link>
				</div>
			</nav>
		);
	} else {
		return (
			<nav className="navbar navbar-dark header">
				<Link className="header__home" to="/">
					<img className="header__logo" src={Logo} alt="mug" />
					<h4>eroCar</h4>
				</Link>
				<div className="header-rightDiv">
					<Link className="header__goHome" to="/">
						Home
					</Link>
					<Link className="header__logout" to="/" onClick={logOut}>
						Logout
					</Link>
				</div>
			</nav>
		);
	}
}
