import React, { Component } from 'react';
import 'axios';
import { Link } from 'react-router-dom';

export default class MainBody extends Component {
	render() {
		return (
			<div className="login">
				<h4 className="login-title">Please Select One Option</h4>
				<div className="login-btnDiv">
					<Link to="/login">
						<button className="login-btn" type="button">
							Login
						</button>
					</Link>
					<Link to="/register">
						<button className="login-btn" type="button">
							Register
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
