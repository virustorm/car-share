// import React from 'react';
import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import Modo from '../assets/images/modo.png';
import Zip from '../assets/icons/zip.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = 'AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ';
// const BusReactComponent = ({ text }) => <div>{text}</div>;
const ZipReactComponent = ({ text }) => <div>{text}</div>;

export default class ModoMap extends Component {
	modoMap = () => {
		return (
			this.props.data.modoLocation &&
			this.props.data.modoLocation.map((data, index) => {
				return (
					<AnyReactComponent
						key={index}
						lat={data.Latitude}
						lng={data.Longitude}
						text={
							<Link className="modoMap" to={`/modo/${data.LocationID}`}>
								<img
									className="modo"
									onClick={() => {
										console.log('----------------------------');
										console.log('clicked');
										console.log(data.LocationID);
									}}
									src={Modo}
									alt="modo"
								/>
							</Link>
						}
					/>
				);
			})
		);
	};

	componentDidUpdate(prevProps) {
		if (this.props.data.center !== prevProps.data.center) {
			this.props.data.center = prevProps.data.center;
		}
	}

	render() {
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

				<ZipReactComponent
					lat={49.28509}
					lng={-123.111461}
					text={
						<Link className="zipMap" to={`/zip/test`}>
							<img
								className="zip"
								// onClick={() => {
								// 	console.log('----------------------------');
								// 	console.log('clicked');
								// 	console.log(data.LocationID);
								// }}
								src={Zip}
								alt="ZipCar"
							/>
						</Link>
					}
				/>
				<ZipReactComponent
					lat={49.286725}
					lng={-123.120212}
					text={
						<Link className="zipMap" to={`/zip/test`}>
							<img className="zip" src={Zip} alt="ZipCar" />
						</Link>
					}
				/>

				{this.modoMap()}
			</GoogleMapReact>
		);
	}
}
