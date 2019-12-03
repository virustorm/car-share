import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class Facebook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: '',
			display: 'none'
		};
	}

	responseGoogle = (response) => {
		console.log(response);
		this.setState({
			status: response.profileObj.name,
			display: 'block'
		});
		localStorage.setItem('token', JSON.stringify(response.accessToken));
		window.location.href = 'http://localhost:3000/map';
	};

	componentClicked = () => {
		this.setState({ load: false });
	};

	render() {
		return (
			<div>
				<div className="fb">
					<GoogleLogin
						clientId={`${process.env.REACT_APP_GOOGLEKEY}`}
						buttonText="Login"
						onSuccess={this.responseGoogle}
						onFailure={this.responseGoogle}
						cookiePolicy={'single_host_origin'}
						className="fb-google"
					/>
				</div>
			</div>
		);
	}
}
