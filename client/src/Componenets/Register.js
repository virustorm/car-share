import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: '',
			display: 'none'
		};
	}

	submit = () => {
		axios
			.post('http://localhost:5000/register', {
				username: this.username.value,
				password: this.password.value
			})
			.then((res) => {
				if (res.status === 200) {
					console.log('200');
					this.setState({ display: 'none' });
					window.location = '/';
				}
			})
			.catch((err) => {
				console.log(err);
				if (err == 'Error: Request failed with status code 400') {
					this.setState({
						display: 'block',
						status: 'Username already Taken'
					});
				}
			});
	};
	render() {
		return (
			<div className="login">
				<h1 className="login-h1"> Register</h1>
				<h4 className="login-title">username</h4>
				<input
					className="login-input"
					type="text"
					placeholder="username"
					ref={(ref) => (this.username = ref)}
				/>
				<h4 className="login-title login-regi">password</h4>
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
