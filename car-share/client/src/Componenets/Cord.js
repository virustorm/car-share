import React from 'react';
import { geolocated } from 'react-geolocated';
import Map from '../Componenets/Map';

class Demo extends React.Component {
	render() {
		return !this.props.isGeolocationAvailable ? (
			<div className="loading">Your browser does not support Geolocation</div>
		) : !this.props.isGeolocationEnabled ? (
			<div className="loading">Geolocation is not enabled</div>
		) : this.props.coords ? (
			<Map data={this.props} />
		) : (
			<div className="loading">Getting the location data&hellip;</div>
		);
	}
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false
	},
	userDecisionTimeout: 5000
})(Demo);
