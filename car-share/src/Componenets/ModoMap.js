// import React from 'react';
import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import Modo from '../assets/images/modo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = 'AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ';

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

	render() {
		// console.log(this.props);
		return (
			<GoogleMapReact
				bootstrapURLKeys={{ key: apiKey }}
				defaultCenter={this.props.data.center}
				defaultZoom={this.props.data.zoom}
			>
				<AnyReactComponent
					lat={this.props.data.center.lat}
					lng={this.props.data.center.lng}
					text={<FontAwesomeIcon className="circle" icon={faCircle} />}
				/>

				{this.modoMap()}
			</GoogleMapReact>
		);
	}
}
