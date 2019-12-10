import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FbLogin from './FbLogin';
import GoogleLogin from './GoogleLogin';
// import axios from 'axios';
// import cookies from 'universal-cookie';

export default class MainBody extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: '',
			display: 'none',
			nameFil: [],
			regText: 'Register'
		};
	}
	submit = () => {
		axios
			.post('http://localhost:5000/login', {
				username: this.username.value,
				password: this.password.value
			})
			.then((res) => {
				localStorage.setItem('token', JSON.stringify(res.data));
				this.setState({ status: 'Loading', display: 'block' });
				window.location.href = 'http://localhost:3000/map';
			})
			.catch((error) => {
				console.log(error);
				this.setState({ status: error.response.data, display: 'block' });

				// if (error.response) {
				// 	console.log(error.response.data);
				// 	console.log(error.response.status);
				// 	console.log(error.response.headers);
				// }
			});
	};

	render() {
		let checkToken = JSON.parse(localStorage.getItem('token'));
		if (checkToken === null || checkToken === undefined) {
			return (
				<div className="login">
					<div className="login-tab">
						<h4 className="login-title">username:</h4>
						<input
							className="login-input"
							type="text"
							placeholder="username"
							ref={(ref) => (this.username = ref)}
						/>
						<h4 className="login-title login-regi">password:</h4>
						<input
							className="login-input"
							type="password"
							placeholder="password"
							ref={(ref) => (this.password = ref)}
						/>
						<button className="login-btn" type="button" onClick={this.submit}>
							LogIn
						</button>
						<div className="login-errDiv" style={{ display: this.state.display }}>
							{this.state.status}
						</div>
					</div>
					<div className="login-btnDiv">
						<h1 className="login-promo">
							Let's see How <br />Aerocar <br />Can help You
						</h1>
						<div className="login-subHero">
							<Link to="/register">
								<button className="login-regBtn" type="button">
									{this.state.regText}
								</button>
							</Link>
							<FbLogin />
							<GoogleLogin />
						</div>
					</div>
				</div>
			);
		} else {
			window.location.href = 'http://localhost:3000/map';
		}
	}
}
