import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div>
			<Link to="/">
				<h3>Home</h3>
			</Link>
		</div>
	);
}
