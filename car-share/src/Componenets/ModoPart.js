import React, { Component } from 'react';
import axios from 'axios';

// import PriusWhite from '../assets/images/priusWhite.png';

import HondaFitWhite from '../assets/images/2017HondaFitWhite.png';
import HondaFitGrey from '../assets/images/HondaFitGrey.png';
import HondaCRVWhite from '../assets/images/HondaCRVWhite.png';

import ToyotaCorollaHatchbackWhite from '../assets/images/CorollaHatchbackWhite.jpg';
import ToyotaRav4White from '../assets/images/ToyotaRav4White.jpg';
import ToyotaPriusCRed from '../assets/images/2017PriusCRed.jpg';
import ToyotaPriusRed from '../assets/images/ToyotaPriusRed.jpg';
import ToyotaPriusCBlue from '../assets/images/ToyotaPriusCBlue.png';
import ToyotaPriusVWhite from '../assets/images/ToyotaPriusVWhite.jpg';
import ToyotaPriusCOrange from '../assets/images/ToyotaPriusCOrange.jpg';
import ToyotaPriusCGrey from '../assets/images/ToyotaPriusCGrey.png';
import ToyotaPriusCYellow from '../assets/images/ToyotaPriusCYellow.png';
import ToyotaPriusSilver from '../assets/images/ToyotaPriusSilver.jpg';
import ToyotaPriusCWhite from '../assets/images/ToyotaPriusCWhite.jpeg';

import MitsubishiOutlander from '../assets/images/MitsubishiOutlander.jpg';

import HyundaiElantraWhite from '../assets/images/HyundaiElantraWhite.jpg';
import HyundaiTucsonWhite from '../assets/images/HyundaiTucsonWhite.png';

import KiaRondoWhite from '../assets/images/KiaRondoWhite.png';
import KiaSedonaWhite from '../assets/images/KiaSedonaWhite.jpg';

import NissanFrontierWhite from '../assets/images/NissanFrontierWhite.jpg';
import NissanNV200White from '../assets/images/NissanNV200White.jpg';

import Fiat500AbarthRed from '../assets/images/Fiat500AbarthRed.jpg';

import DodgeGrandCaravanRed from '../assets/images/DodgeGrandCaravanRed.png';

export default class ModoPart extends Component {
	componentDidMount() {
		axios.get(`https://bookit.modo.coop/api/v2/car_list`).then((res) => {
			const value = Object.values(res.data.Response.Cars);
			value.forEach((data) => {
				if (data.Location[0].LocationID === this.props.match.params.LocationID) {
					if (data.Model === 'Prius C' && data.Colour === 'Red') {
						data.pic = `${ToyotaPriusCRed}`;
					}
					if (data.Model === 'Prius C' && data.Colour === 'Blue') {
						data.pic = `${ToyotaPriusCBlue}`;
					}
					if (data.Model === 'Prius V' && data.Colour === 'White') {
						data.pic = `${ToyotaPriusVWhite}`;
					}
					if (data.Model === 'Prius' && data.Colour === 'Red') {
						data.pic = `${ToyotaPriusRed}`;
					}
					if (data.Model === 'Prius C' && data.Colour === 'Orange') {
						data.pic = `${ToyotaPriusCOrange}`;
					}
					if (data.Model === 'Prius C' && data.Colour === 'Grey') {
						data.pic = `${ToyotaPriusCGrey}`;
					}
					if (data.Model === 'Prius C' && data.Colour === 'Yellow') {
						data.pic = `${ToyotaPriusCYellow}`;
					}
					if (data.Model === 'Prius' && data.Colour === 'Silver') {
						data.pic = `${ToyotaPriusSilver}`;
					}
					if (data.Model === 'Prius C' && data.Colour === 'White') {
						data.pic = `${ToyotaPriusCWhite}`;
					}
					if (data.Model === 'Corolla Hatchback' && data.Colour === 'White') {
						data.pic = `${ToyotaCorollaHatchbackWhite}`;
					}
					if (data.Model === 'RAV4 Hybrid' && data.Colour === 'White') {
						data.pic = `${ToyotaRav4White}`;
					}
					if (data.Model === 'Fit' && data.Colour === 'White') {
						data.pic = `${HondaFitWhite}`;
					}
					if (data.Model === 'Fit' && data.Colour === 'Grey') {
						data.pic = `${HondaFitGrey}`;
					}
					if (data.Model === 'CR-V' && data.Colour === 'White') {
						data.pic = `${HondaCRVWhite}`;
					}
					if (data.Model === 'Rondo' && data.Colour === 'White') {
						data.pic = `${KiaRondoWhite}`;
					}
					if (data.Model === 'Sedona' && data.Colour === 'White') {
						data.pic = `${KiaSedonaWhite}`;
					}
					if (data.Model === 'Outlander PHEV' && data.Colour === 'White') {
						data.pic = `${MitsubishiOutlander}`;
					}
					if (data.Model === 'Elantra' && data.Colour === 'White') {
						data.pic = `${HyundaiElantraWhite}`;
					}
					if (data.Model === 'Tucson' && data.Colour === 'White') {
						data.pic = `${HyundaiTucsonWhite}`;
					}
					if (data.Model === 'Frontier' && data.Colour === 'White') {
						data.pic = `${NissanFrontierWhite}`;
					}
					if (data.Model === 'NV 200' && data.Colour === 'White') {
						data.pic = `${NissanNV200White}`;
					}
					if (data.Model === '500 Abarth' && data.Colour === 'Red') {
						data.pic = `${Fiat500AbarthRed}`;
					}
					if (data.Model === 'Grand Caravan' && data.Colour === 'Red') {
						data.pic = `${DodgeGrandCaravanRed}`;
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
				console.log(data.Model, data.Colour, data.Make, data.Year);
				return (
					<div key={data.ID}>
						<img className="modoPart-pic" src={data.pic} alt={data.Model} />
						<h1>
							{data.Year}
							{data.Make}
							{data.Model}
							{data.Colour}
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
