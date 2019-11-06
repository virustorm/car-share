import React from 'react';
import axios from 'axios';
import ModoMap from '../Componenets/ModoMap';

export default class Map extends React.Component {
	//past in props of current loaction from Cord componenet
	componentDidMount() {
		axios
			.get(
				`https://bookit.modo.coop/api/v2/nearby?lat=${this.props.data.coords.latitude}&long=${this.props.data
					.coords.longitude}`
			)
			.then((result) => {
				this.setState({
					modoLocation: result.data.Response.Locations
				});
			});
		this.setState({
			center: { lat: this.props.data.coords.latitude, lng: this.props.data.coords.longitude },
			zoom: 16
		});
	}

	state = {
		center: { lat: 0, lng: 0 },
		zoom: 0,
		modoLocation: []
	};

	render() {
		return (
			<div className="map">
				<ModoMap data={this.state} />
			</div>
		);
	}
}
