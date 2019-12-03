import React from 'react';
import { geolocated } from 'react-geolocated';
import Map from '../Componenets/Map';

class Demo extends React.Component {
	state = {
		mode: 'Cars'
	};

	render() {
		let checkToken = JSON.parse(localStorage.getItem('token'));
		if (checkToken === null || checkToken === undefined) {
			window.location.href = 'http://localhost:3000';
		} else {
			return !this.props.isGeolocationAvailable ? (
				<div className="loading">Your browser does not support Geolocation</div>
			) : !this.props.isGeolocationEnabled ? (
				<div className="loading">Geolocation is not enabled</div>
			) : this.props.coords ? (
				<div className="mapDiv">
					<Map data={this.props} stat={this.state} />
				</div>
			) : (
				<div className="loading">Getting the location data&hellip;</div>
			);
		}
	}
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false
	},
	userDecisionTimeout: 5000
})(Demo);
