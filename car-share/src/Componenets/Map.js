import React from 'react';
import axios from 'axios';
import ModoMap from '../Componenets/ModoMap';

import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			center: { lat: 0, lng: 0 },
			zoom: 0,
			modoLocation: [],
			loading: true,
			busLocation: [],
			value: '',
			address: ''
		};
		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	//past in props of current loaction from Cord componenet
	componentDidMount() {
		axios
			.get(
				`https://bookit.modo.coop/api/v2/nearby?lat=${this.props.data.coords.latitude}&long=${this.props.data
					.coords.longitude}&distance=2000`
			)
			.then((result) => {
				this.setState({
					modoLocation: result.data.Response.Locations,
					loading: false
				});
			});
		// axios
		// 	.get(
		// 		`https://api.translink.ca/rttiapi/v1/stops?apikey=UMNOPM79se8XWKDIVSPF&lat=${this.props.data.coords
		// 			.latitude}&long=${this.props.data.coords.longitude}&radius=500`
		// 	)
		// 	.then((res) => {
		// 		console.log(res);
		// 		this.setState({
		// 			busLocation: res.data,
		// 			loading: false
		// 		});
		// 	});

		this.setState({
			center: { lat: this.props.data.coords.latitude, lng: this.props.data.coords.longitude },
			zoom: 16
		});
	}

	handleChange = (address) => {
		this.setState({ address });
	};

	handleSelect = (address) => {
		geocodeByAddress(address)
			.then((results) => getLatLng(results[0]))
			.then((latLng) => console.log('Success', latLng))
			.catch((error) => console.error('Error', error));
	};
	// handleChange(event) {
	// 	this.setState({ value: event.target.value });
	// }

	// handleSubmit(event) {
	// 	console.log(this.state.value);
	// 	event.preventDefault();
	// }

	render() {
		if (this.state.loading === true) {
			return <div className="loading">Loading...</div>;
		}
		return (
			<div className="map">
				{/* <form className="map-searchBox" onSubmit={this.handleSubmit}>
					<input
						className="map-search"
						id="test"
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
					<input className="map-submit" type="submit" />
				</form> */}
				<PlacesAutocomplete
					value={this.state.address}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
				>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div>
							<input
								{...getInputProps({
									placeholder: 'Search Places ...',
									className: 'location-search-input'
								})}
							/>
							<div className="autocomplete-dropdown-container">
								{loading && <div>Loading...</div>}
								{suggestions.map((suggestion) => {
									const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
									// inline style for demonstration purpose
									const style = suggestion.active
										? { backgroundColor: '#fafafa', cursor: 'pointer' }
										: { backgroundColor: '#ffffff', cursor: 'pointer' };
									return (
										<div
											{...getSuggestionItemProps(suggestion, {
												className,
												style
											})}
										>
											<span>{suggestion.description}</span>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</PlacesAutocomplete>
				<ModoMap data={this.state} />
			</div>
		);
	}
}
