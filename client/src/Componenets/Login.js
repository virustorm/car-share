import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import cookies from 'universal-cookie';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: '',
			display: 'none',
			nameFil: []
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
				this.setState({ status: 'loggin in', display: 'block' });
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
		return (
			<div className="login">
				<h1>Login</h1>
				<h4 className="login-title">username</h4>
				<input
					className="login-input"
					type="text"
					placeholder="username"
					ref={(ref) => (this.username = ref)}
				/>
				<h4 className="login-title">password</h4>
				<input
					className="login-input"
					type="password"
					placeholder="password"
					ref={(ref) => (this.password = ref)}
				/>
				<div className="login__submitDiv">
					<button className="login-btn" type="button" onClick={this.submit}>
						Submit
					</button>
					<Link to="/">
						<button className="login-btn" type="button">
							Cancel
						</button>
					</Link>
				</div>
				<div className="login-errDiv" style={{ display: this.state.display }}>
					{this.state.status}
				</div>
			</div>
		);
	}
}
