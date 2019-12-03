import React, { Component } from 'react';
import 'axios';
import { Link } from 'react-router-dom';
import FbLogin from './FbLogin';
import GoogleLogin from './GoogleLogin';
// import axios from 'axios';
// import cookies from 'universal-cookie';

export default class MainBody extends Component {
	render() {
		let checkToken = JSON.parse(localStorage.getItem('token'));
		if (checkToken === null || checkToken === undefined) {
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
						<FbLogin />
						<GoogleLogin />
					</div>
				</div>
			);
		} else {
			window.location.href = 'http://localhost:3000/map';
		}
	}
}
