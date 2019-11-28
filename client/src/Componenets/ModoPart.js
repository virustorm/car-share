import React, { Component } from 'react';
import axios from 'axios';
import Modo from '../assets/images/modo.png';

let shortDes = '';

export default class ModoPart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// modoCar: [],
			carMatch: [],
			loading: true,
			carPic: []
		};
	}

	componentDidMount() {
		axios.get(`https://bookit.modo.coop/api/v2/car_list`).then((res) => {
			const filteredValue = Object.values(res.data.Response.Cars).filter(
				(object) => object.Location[0].LocationID === this.props.match.params.LocationID
			);
			this.setState({ carMatch: filteredValue });
			axios
				.get(`https://bookit.modo.coop/api/v2/location_list?location_id=${this.props.match.params.LocationID}`)
				.then((res) => {
					// console.log(res.data);
					var placeHold = Object.values(res.data.Response.Locations);
					shortDes = placeHold[0].ShortDescription;
					this.setState({ loading: false });
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
		// console.log(this.state.carMatch);

		return (
			this.state.carMatch &&
			this.state.carMatch.map((data, index) => {
				console.log(`${data.Make}${data.Model}${data.Colour}`);
				// console.log(data);
				return (
					<div className="modoPart" key={data.ID}>
						<img
							className="modoPart-pic"
							src={`https://res.cloudinary.com/virustorm/image/upload/v1574890151/car-share/${data.Make}${data.Model}${data.Colour}.png`}
							alt={data.Model}
						/>
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

	render() {
		// console.log(this.props);
		// console.log(this.locationCar());
		if (this.state.loading) return <div className="loading">Loading...</div>;
		return (
			<div className="modoCar">
				<h1 className="modoCar-title">
					<img className="modoCar__title-modo" src={Modo} alt="modo" />
					{shortDes}
				</h1>
				{this.locationCar()}
			</div>
		);
	}
}
