import React from 'react';
import GoogleMapReact from 'google-map-react';
import Modo from '../assets/images/modo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = 'AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ';

export default function ModoMap(props) {
	// past in nearby 1km modo location from map componenet
	const modoMap =
		props.data.modoLocation &&
		props.data.modoLocation.map((data, index) => {
			return (
				<AnyReactComponent
					key={index}
					lat={data.Latitude}
					lng={data.Longitude}
					text={<img className="modo" src={Modo} />}
				/>
			);
		});

	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: apiKey }}
			defaultCenter={props.data.center}
			defaultZoom={props.data.zoom}
		>
			<AnyReactComponent
				lat={props.data.center.lat}
				lng={props.data.center.lng}
				text={<FontAwesomeIcon className="circle" icon={faCircle} />}
			/>
			{modoMap}
		</GoogleMapReact>
	);
}
