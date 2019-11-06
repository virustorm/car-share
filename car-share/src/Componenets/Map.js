import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Modo from '../assets/images/modo.png';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = 'AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ';

export default class Map extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://bookit.modo.coop/api/v2/nearby?lat=${this.props.data.coords.latitude &&
					this.props.data.coords.latitude}&long=${this.props.data.coords.longitude &&
					this.props.data.coords.longitude}`
			)
			.then((result) => {
				this.setState({
					modoLocation: result.data.Response.Locations
				});
				console.log(this.state);
			});
		this.setState({
			center: { lat: this.props.data.coords.latitude, lng: this.props.data.coords.longitude },
			zoom: 16
		});
	}

	state = {
		center: { lat: 0, lng: 0 },
		zoom: 0,
		modoLocation: []
	};

	render() {
		return (
			<div className="mapDiv">
				<div className="map">
					<GoogleMapReact
						bootstrapURLKeys={{ key: apiKey }}
						defaultCenter={this.state.center}
						defaultZoom={this.state.zoom}
					>
						<AnyReactComponent
							lat={this.props.data.coords.latitude}
							lng={this.props.data.coords.longitude}
							text={<FontAwesomeIcon className="circle" icon={faCircle} />}
						/>

						<AnyReactComponent
							lat={this.state.modoLocation[0].Latitude}
							lng={this.state.modoLocation[0].Longitude}
							text={<img className="modo" src={Modo} />}
						/>
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}
