import React, { Component } from 'react';
import axios from 'axios';

import HondaFitWhite from '../assets/images/2017HondaFitWhite.png';
import HondaFitGrey from '../assets/images/HondaFitGrey.png';
import HondaFitBlue from '../assets/images/HondaFitBlue.jpg';
import HondaFitRed from '../assets/images/HondaFitRed.png';
import HondaCRVWhite from '../assets/images/HondaCRVWhite.png';
import HondaCRVSilver from '../assets/images/HondaCRVSilver.jpg';

import ToyotaCorollaHatchbackWhite from '../assets/images/CorollaHatchbackWhite.jpg';
import ToyotaRav4White from '../assets/images/ToyotaRav4White.jpg';
import ToyotaRav4Blue from '../assets/images/ToyotaRav4HybridBlue.jpg';
import ToyotaRav4Red from '../assets/images/ToyotaRav4HybridRed.jpg';
import ToyotaPriusCRed from '../assets/images/2017PriusCRed.jpg';
import ToyotaPriusRed from '../assets/images/ToyotaPriusRed.jpg';
import ToyotaPriusCBlue from '../assets/images/ToyotaPriusCBlue.png';
import ToyotaPriusVWhite from '../assets/images/ToyotaPriusVWhite.jpg';
import ToyotaPriusCOrange from '../assets/images/ToyotaPriusCOrange.jpg';
import ToyotaPriusCGrey from '../assets/images/ToyotaPriusCGrey.png';
import ToyotaPriusCYellow from '../assets/images/ToyotaPriusCYellow.png';
import ToyotaPriusSilver from '../assets/images/ToyotaPriusSilver.jpg';
import ToyotaPriusCWhite from '../assets/images/ToyotaPriusCWhite.jpeg';
import ToyotaPriusCGreen from '../assets/images/ToyotaPriusCGreen.jpg';
import ToyotaPriusWhite from '../assets/images/ToyotaPriusWhite.jpg';
import ToyotaSiennaWhite from '../assets/images/ToyotaSiennaWhite.png';

import MitsubishiOutlander from '../assets/images/MitsubishiOutlander.jpg';

import HyundaiElantraWhite from '../assets/images/HyundaiElantraWhite.jpg';
import HyundaiElantraRed from '../assets/images/HyundaiElantraRed.jpg';
import HyundaiTucsonWhite from '../assets/images/HyundaiTucsonWhite.png';
import HyundaiTucsonRed from '../assets/images/HyundaiTucsonRed.jpg';
import HyundaiKonaRed from '../assets/images/HyundaiKonaRed.jpg';

import KiaRondoWhite from '../assets/images/KiaRondoWhite.png';
import KiaSedonaWhite from '../assets/images/KiaSedonaWhite.jpg';
import KiaSoulSilver from '../assets/images/KiaSoulSilver.jpg';

import NissanFrontierWhite from '../assets/images/NissanFrontierWhite.jpg';
import NissanNV200White from '../assets/images/NissanNV200White.jpg';
import NissanVersaWhite from '../assets/images/NissanVersaWhite.jpg';
import NissanVersaBlue from '../assets/images/NissanVersaBlue.jpg';
import NissanRogueSilver from '../assets/images/NissanRogueSilver.jpg';
import NissanMicraBlue from '../assets/images/NissanMicraBlue.jpg';
import NissanMicraGrey from '../assets/images/NissanMicraGrey.jpeg';

import Fiat500AbarthRed from '../assets/images/Fiat500AbarthRed.jpg';
import Fiat500Grey from '../assets/images/Fiat500Grey.png';

import DodgeGrandCaravanRed from '../assets/images/DodgeGrandCaravanRed.png';

import BMWX1White from '../assets/images/BMWX1White.jpg';

let shortDes = '';

export default class ModoPart extends Component {
	componentDidMount() {
		axios.get(`https://bookit.modo.coop/api/v2/car_list`).then((res) => {
			const value = Object.values(res.data.Response.Cars);
			value.forEach((data) => {
				if (data.Location[0].LocationID === this.props.match.params.LocationID) {
					if (data.Model === 'Prius V' && data.Colour === 'White') {
						data.pic = `${ToyotaPriusVWhite}`;
					}
					if (data.Model === 'Prius' && data.Colour === 'Red') {
						data.pic = `${ToyotaPriusRed}`;
					}
					if (data.Model === 'Prius' && data.Colour === 'Silver') {
						data.pic = `${ToyotaPriusSilver}`;
					}
					if (data.Model === 'Prius' && data.Colour === 'White') {
						data.pic = `${ToyotaPriusWhite}`;
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
					if (data.Model === 'Prius C' && data.Colour === 'White') {
						data.pic = `${ToyotaPriusCWhite}`;
					}
					if (data.Model === 'Prius C' && data.Colour === 'Red') {
						data.pic = `${ToyotaPriusCRed}`;
					}
					if (data.Model === 'Prius C' && data.Colour === 'Blue') {
						data.pic = `${ToyotaPriusCBlue}`;
					}
					if (data.Model === 'Prius C' && data.Colour === 'Green') {
						data.pic = `${ToyotaPriusCGreen}`;
					}
					if (data.Model === 'Corolla Hatchback' && data.Colour === 'White') {
						data.pic = `${ToyotaCorollaHatchbackWhite}`;
					}
					if (data.Model === 'RAV4 Hybrid' && data.Colour === 'White') {
						data.pic = `${ToyotaRav4White}`;
					}
					if (data.Model === 'RAV4 Hybrid' && data.Colour === 'Blue') {
						data.pic = `${ToyotaRav4Blue}`;
					}
					if (data.Model === 'RAV4 Hybrid' && data.Colour === 'Red') {
						data.pic = `${ToyotaRav4Red}`;
					}
					if (data.Model === 'Sienna' && data.Colour === 'White') {
						data.pic = `${ToyotaSiennaWhite}`;
					}
					if (data.Model === 'Fit' && data.Colour === 'Red') {
						data.pic = `${HondaFitRed}`;
					}
					if (data.Model === 'Fit' && data.Colour === 'White') {
						data.pic = `${HondaFitWhite}`;
					}
					if (data.Model === 'Fit' && data.Colour === 'Grey') {
						data.pic = `${HondaFitGrey}`;
					}
					if (data.Model === 'Fit' && data.Colour === 'Blue') {
						data.pic = `${HondaFitBlue}`;
					}
					if (data.Model === 'CR-V' && data.Colour === 'White') {
						data.pic = `${HondaCRVWhite}`;
					}
					if (data.Model === 'CR-V' && data.Colour === 'Silver') {
						data.pic = `${HondaCRVSilver}`;
					}
					if (data.Model === 'Rondo' && data.Colour === 'White') {
						data.pic = `${KiaRondoWhite}`;
					}
					if (data.Model === 'Sedona' && data.Colour === 'White') {
						data.pic = `${KiaSedonaWhite}`;
					}
					if (data.Model === 'Soul' && data.Colour === 'Silver') {
						data.pic = `${KiaSoulSilver}`;
					}
					if (data.Model === 'Outlander PHEV' && data.Colour === 'White') {
						data.pic = `${MitsubishiOutlander}`;
					}
					if (data.Model === 'Elantra' && data.Colour === 'White') {
						data.pic = `${HyundaiElantraWhite}`;
					}
					if (data.Model === 'Elantra' && data.Colour === 'Red') {
						data.pic = `${HyundaiElantraRed}`;
					}
					if (data.Model === 'Kona' && data.Colour === 'Red') {
						data.pic = `${HyundaiKonaRed}`;
					}
					if (data.Model === 'Tucson' && data.Colour === 'White') {
						data.pic = `${HyundaiTucsonWhite}`;
					}
					if (data.Model === 'Tucson' && data.Colour === 'Red') {
						data.pic = `${HyundaiTucsonRed}`;
					}
					if (data.Model === 'Frontier' && data.Colour === 'White') {
						data.pic = `${NissanFrontierWhite}`;
					}
					if (data.Model === 'NV 200' && data.Colour === 'White') {
						data.pic = `${NissanNV200White}`;
					}
					if (data.Model === 'Versa Note' && data.Colour === 'White') {
						data.pic = `${NissanVersaWhite}`;
					}
					if (data.Model === 'Versa Note' && data.Colour === 'Blue') {
						data.pic = `${NissanVersaBlue}`;
					}
					if (data.Model === 'Rogue' && data.Colour === 'Silver') {
						data.pic = `${NissanRogueSilver}`;
					}
					if (data.Model === 'Micra' && data.Colour === 'Blue') {
						data.pic = `${NissanMicraBlue}`;
					}
					if (data.Model === 'Micra' && data.Colour === 'Grey') {
						data.pic = `${NissanMicraGrey}`;
					}
					if (data.Model === '500 Abarth' && data.Colour === 'Red') {
						data.pic = `${Fiat500AbarthRed}`;
					}
					if (data.Model === '500' && data.Colour === 'Grey') {
						data.pic = `${Fiat500Grey}`;
					}
					if (data.Model === 'Grand Caravan' && data.Colour === 'Red') {
						data.pic = `${DodgeGrandCaravanRed}`;
					}
					if (data.Model === 'X1' && data.Colour === 'White') {
						data.pic = `${BMWX1White}`;
					}
					axios
						.get(
							`https://bookit.modo.coop/api/v2/location_list?location_id=${this.props.match.params
								.LocationID}`
						)
						.then((res) => {
							var placeHold = Object.values(res.data.Response.Locations);
							shortDes = placeHold[0].ShortDescription;
							this.setState({ loading: false, carMatch: [ ...this.state.carMatch, data ] });
						});
				}
			});
		});
	}

	carAccessories = (data) => {
		return data.Accessories.map((data, index) => {
			return (
				<h4 className="modoPart-text" key={index}>
					{data}
				</h4>
			);
		});
	};

	locationCar = () => {
		console.log(this.state.carMatch);
		return (
			this.state.carMatch &&
			this.state.carMatch.map((data) => {
				console.log(data.Model, data.Colour, data.Make, data.Year);
				console.log(data);
				return (
					<div className="modoPart" key={data.ID}>
						<img className="modoPart-pic" src={data.pic} alt={data.Model} />
						<div className="modoPart-wholeInfo">
							<h3 className="modoPart-des"> {`${data.Year} ${data.Make} ${data.Model}`}</h3>
							<div className="modoPart__info">
								<div className="modoPart__colorSeat">
									<h4 className="modoPart__info-color ">{`Color: ${data.Colour}`}</h4>
									<h4 className="modoPart__info-seats ">{`${data.Seats} Seats`}</h4>
								</div>
								<div className="modoPart-accBox">
									<h4 className="modoPart-acc">Accessories:</h4>

									{this.carAccessories(data)}
								</div>
							</div>
						</div>
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
		if (this.state.loading) return <div className="loading">Loading...</div>;
		return (
			<div className="modoCar">
				<h1 className="modoCar-title">{shortDes}</h1>
				{this.locationCar()}
			</div>
		);
	}
}
