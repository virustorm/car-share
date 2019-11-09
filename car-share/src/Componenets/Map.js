import React from 'react';
import axios from 'axios';
import ModoMap from '../Componenets/ModoMap';

export default class Map extends React.Component {
	//past in props of current loaction from Cord componenet
	componentDidMount() {
		axios
			.get(
				`https://bookit.modo.coop/api/v2/nearby?lat=${this.props.data.coords.latitude}&long=${this.props.data
					.coords.longitude}&distance=2000`
			)
			.then((result) => {
				this.setState({
					modoLocation: result.data.Response.Locations,
					loading: false
				});
			});
		// axios
		// 	.get(
		// 		`https://api.translink.ca/rttiapi/v1/stops?apikey=UMNOPM79se8XWKDIVSPF&lat=${this.props.data.coords
		// 			.latitude}&long=${this.props.data.coords.longitude}&radius=500`
		// 	)
		// 	.then((res) => {
		// 		console.log(res);
		// 		this.setState({
		// 			busLocation: res.data,
		// 			loading: false
		// 		});
		// 	});
		this.setState({
			center: { lat: this.props.data.coords.latitude, lng: this.props.data.coords.longitude },
			zoom: 16
		});
	}

	state = {
		center: { lat: 0, lng: 0 },
		zoom: 0,
		modoLocation: [],
		loading: true,
		busLocation: []
	};

	render() {
		if (this.state.loading === true) {
			return <div className="loading">Loading...</div>;
		}
		return (
			<div className="map">
				<ModoMap data={this.state} />
			</div>
		);
	}
}
