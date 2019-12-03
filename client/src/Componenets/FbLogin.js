import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import fbLogo from '../assets/icons/fb.png';

export default class Facebook extends Component {
	state = {
		auth: false,
		name: '',
		picture: '',
		load: true,
		display: 'none'
	};

	responseFacebook = (response) => {
		console.log(response);
		if (response.status !== 'unknown')
			this.setState({
				auth: true,
				name: response.name,
				picture: response.picture.data.url,
				display: 'block'
			});

		localStorage.setItem('token', JSON.stringify(response.accessToken));
		window.location.href = 'http://localhost:3000/map';
	};

	componentClicked = () => {
		this.setState({ load: false });
	};

	render() {
		const fbClick = (
			<FacebookLogin
				appId={`${process.env.REACT_APP_FBKEY}`}
				autoLoad={true}
				fields="name,picture"
				onClick={this.componentClicked}
				callback={this.responseFacebook}
				className="fb-library"
			/>
		);

		if (this.state.load === true) {
			return (
				// <div className="fb-fake">
				<button className="fb-fakeBtn" type="button" onClick={this.componentClicked}>
					<img className="fb-fakeImg" src={fbLogo} alt="fb" />
				</button>
				// </div>
			);
		} else {
			return (
				<div className="fb">
					<button className="fb-fakeBtn" type="button" onClick={this.componentClicked}>
						<img className="fb-fakeImg" src={fbLogo} alt="fb" />
					</button>
					{fbClick}
				</div>
			);
		}
	}
}
