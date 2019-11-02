import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 49.224951,
			lng: -122.973422
		},
		zoom: 11,
		apiKey: 'AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ'
	};
	// keys = AIzaSyC_f - DBHL8cc - MhQSPAYMdGRWkInlwY7GQ;

	render() {
		return (
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: this.props.apiKey }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				/>
			</div>
		);
	}
}

export default SimpleMap;
