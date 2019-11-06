import React, { Component } from 'react';
import axios from 'axios';

// import PriusRed from '../assets/images/priusRed.jpg';
// import PriusWhite from '../assets/images/priusWhite.png';

import PriusCRed from '../assets/images/2017PriusCRed.jpg';
import CorollaHatchbackWhite from '../assets/images/CorollaHatchbackWhite.jpg';

import HondaFitWhite from '../assets/images/2017HondaFitWhite.png';
import HondaFitGrey from '../assets/images/HondaFitGrey.png';

import ToyotaRav4White from '../assets/images/ToyotaRav4White.jpg';

import MitsubishiOutlander from '../assets/images/MitsubishiOutlander.jpg';

export default class ModoPart extends Component {
	componentDidMount() {
		axios.get(`https://bookit.modo.coop/api/v2/car_list`).then((res) => {
			const value = Object.values(res.data.Response.Cars);
			value.forEach((data) => {
				if (data.Location[0].LocationID === this.props.match.params.LocationID) {
					if (data.Model === 'Prius C' && data.Colour === 'Red') {
						data.pic = `${PriusCRed}`;
					}
					if (data.Model === 'Corolla Hatchback' && data.Colour === 'White') {
						data.pic = `${CorollaHatchbackWhite}`;
					}
					if (data.Model === 'Fit' && data.Colour === 'White') {
						data.pic = `${HondaFitWhite}`;
					}
					if (data.Model === 'Fit' && data.Colour === 'Grey') {
						data.pic = `${HondaFitGrey}`;
					}
					if (data.Model === 'Outlander PHEV' && data.Colour === 'White') {
						data.pic = `${MitsubishiOutlander}`;
					}
					if (data.Model === 'RAV4 Hybrid' && data.Colour === 'White') {
						data.pic = `${ToyotaRav4White}`;
					}

					this.setState({ loading: false, carMatch: [ ...this.state.carMatch, data ] });
				}
			});
		});
	}

	locationCar = () => {
		// console.log(this.state.carMatch);
		return (
			this.state.carMatch &&
			this.state.carMatch.map((data) => {
				console.log(data);
				return (
					<div key={data.ID}>
						<img className="modoPart-pic" src={data.pic} alt={data.Model} />
						<h1>
							{data.Year}
							{data.Make}
							{data.Model}
						</h1>
					</div>
				);
			})
		);
	};

	state = {
		// modoCar: [],
		carMatch: [],
		loading: true
	};

	render() {
		// console.log(this.props);
		// console.log(this.locationCar());
		if (this.state.loading) return <div>Loading...</div>;
		return (
			<div>
				<h1>location id = {this.props.match.params.LocationID}</h1>
				<h1>Cars at this Location</h1>
				{this.locationCar()}
			</div>
		);
	}
}
