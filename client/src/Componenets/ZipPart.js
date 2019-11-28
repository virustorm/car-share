import React, { Component } from 'react';
import axios from 'axios';
import zipLogo from '../assets/icons/zip.jpeg';

export default class ZipPart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carDetail: {}
		};
	}
	componentDidMount() {
		axios.get(`http://localhost:5000/cars/${this.props.match.params.ObjectID}`).then((res) => {
			this.setState({
				carDetail: res.data[0]
			});
			console.log(this.state.carDetail);
			console.log(this.state.carDetail.cars);
		});
	}
	render() {
		return (
			<div className="modoCar">
				<h1 className="modoCar-title">
					<img className="modoCar__title-modo" src={zipLogo} alt="zip-car" />
					{this.state.carDetail.location}
				</h1>
				<div className="modoPart">
					<img
						className="modoPart-pic"
						src={`https://res.cloudinary.com/virustorm/image/upload/v1574894608/zip-car/${this.state
							.carDetail.cars}.png`}
						alt={this.state.carDetail.cars}
					/>
					<div className="modoPart-wholeInfo">
						<h3 className="modoPart-des"> {`${this.state.carDetail.cars}`}</h3>
						<div className="modoPart__info">
							<div className="modoPart__colorSeat">
								<h4 className="modoPart__info-seats ">{` 5 Seats`}</h4>
							</div>
							<div className="modoPart-accBox">
								<h4 className="modoPart-acc">Accessories:</h4>
								<h4 className="modoPart-text">Cruise Control</h4>
								<h4 className="modoPart-text">Audio: Aux Audio Input</h4>
								<h4 className="modoPart-text">Bluetooth</h4>
								<h4 className="modoPart-text">Backup Camera</h4>
								<h4 className="modoPart-text">Audio: USB audio</h4>
								<h4 className="modoPart-text">Heated Seats</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
