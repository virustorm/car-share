import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Modo from '../assets/images/modo.png';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends React.Component {
	componentDidMount() {
		console.log(this.props.data.coords.longitude);
		console.log(this.props.data.coords.latitude);
		this.setState({
			center: { lat: this.props.data.coords.latitude, lng: this.props.data.coords.longitude },
			zoom: 16
		});
		axios
			.get(
				`https://bookit.modo.coop/api/v2/nearby?lat=${this.props.data.coords.latitude}&long=${this.props.data
					.coords.longitude}`
			)
			.then((result) => {
				this.setState({
					modoLocation: result.data.Response.Locations
				});
			});
	}

	state = {
		center: { lat: 0, lng: 0 },
		zoom: 0,
		apiKey: 'AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ',
		modoLocation: []
	};

	render() {
		return (
			<div className="mapDiv">
				<div className="map">
					<GoogleMapReact
						bootstrapURLKeys={{ key: 'AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ' }}
						defaultCenter={this.state.center}
						defaultZoom={this.state.zoom}
					>
						<AnyReactComponent
							lat={this.props.data.coords.latitude}
							lng={this.props.data.coords.longitude}
							text={<FontAwesomeIcon className="circle" icon={faCircle} />}
						/>

						<AnyReactComponent
							lat={49.2842777141411}
							lng={-123.113564543511}
							text={<img className="modo" src={Modo} />}
						/>
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}
