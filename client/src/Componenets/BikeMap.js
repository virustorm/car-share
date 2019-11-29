// import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';

import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import mobi from '../assets/icons/mobi.jpg';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = 'AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ';

export default class ModoMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modoLoc: this.props.data.modoLocation,
			loading: true,
			newCenter: {},
			mode: 'Cars',
			prevMode: '',
			mobiLoc: []
		};
	}

	mobiMap = () => {
		return (
			this.props.data.mobiLoc &&
			this.props.data.mobiLoc.map((data, index) => {
				return (
					<AnyReactComponent
						key={index}
						lat={data.lat}
						lng={data.lng}
						text={
							<Link className="modoMap" to={`/modo/${data._id}`}>
								<img className="mobi" src={mobi} alt="mobi" />
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
				{this.mobiMap()}
			</GoogleMapReact>
		);
	}
}
