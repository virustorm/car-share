// import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';

import GoogleMapReact from 'google-map-react';
import Modo from '../assets/images/modo.png';
import zip from '../assets/icons/zip.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = 'AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ';
const ZipReactComponent = ({ text }) => <div>{text}</div>;

export default class ModoMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modoLoc: this.props.data.modoLocation,
			loading: true,
			newCenter: {},
			mode: 'Cars',
			prevMode: ''
		};
	}

	componentDidMount() {
		axios.get('http://localhost:5000/cars').then((res) => {
			this.setState({
				zipLoc: res.data,
				mode: this.props.data.mode,
				prevMode: this.props.data.prevMode
			});
		});
	}

	zipMap = () => {
		return (
			this.props.data.zipLoc &&
			this.props.data.zipLoc.map((data, index) => {
				return (
					<ZipReactComponent
						key={index}
						lat={data.lat}
						lng={data.lng}
						text={
							<Link className="zipMap" to={`/zip/${data._id}`}>
								<img className="zip" src={zip} alt="ZipCar" />
							</Link>
						}
					/>
				);
			})
		);
	};

	modoMap = () => {
		return (
			this.state.modoLoc &&
			this.state.modoLoc.map((data, index) => {
				return (
					<AnyReactComponent
						key={index}
						lat={data.Latitude}
						lng={data.Longitude}
						text={
							<Link className="modoMap" to={`/modo/${data.LocationID}`}>
								<img className="modo" src={Modo} alt="modo" />
							</Link>
						}
					/>
				);
			})
		);
	};

	componentDidUpdate(prevProps) {
		if (this.props.data.center !== prevProps.data.center) {
			axios
				.get(
					`https://bookit.modo.coop/api/v2/nearby?lat=${this.props.data.center.lat}&long=${this.props.data
						.center.lng}&distance=2000`
				)
				.then((result) => {
					this.setState({
						modoLoc: result.data.Response.Locations,
						newCenter: prevProps.data.center
					});
					this.modoMap();
				});
		}
	}

	render() {
		if (this.state.mode === 'Bike') {
			return (
				<GoogleMapReact
					bootstrapURLKeys={{ key: apiKey }}
					defaultCenter={this.props.data.center}
					center={this.props.data.center}
					defaultZoom={this.props.data.zoom}
				>
					<AnyReactComponent
						lat={this.props.data.center.lat}
						lng={this.props.data.center.lng}
						text={<FontAwesomeIcon className="circle" icon={faCircle} />}
					/>
				</GoogleMapReact>
			);
		} else {
			return (
				<GoogleMapReact
					bootstrapURLKeys={{ key: apiKey }}
					defaultCenter={this.props.data.center}
					center={this.props.data.center}
					defaultZoom={this.props.data.zoom}
				>
					<AnyReactComponent
						lat={this.props.data.center.lat}
						lng={this.props.data.center.lng}
						text={<FontAwesomeIcon className="circle" icon={faCircle} />}
					/>
				</GoogleMapReact>
			);
		}
	}
}
