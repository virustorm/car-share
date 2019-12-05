import React from 'react';
import axios from 'axios';
import ModoMap from '../Componenets/ModoMap';
import BikeMap from '../Componenets/BikeMap';
import TableMap from '../Componenets/TableMap';

import PlacesAutocomplete from 'react-places-autocomplete';
// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

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
			address: '',
			zipLoc: [],
			mode: 'Bike',
			prevMode: 'Cars',
			mobiLoc: [],
			theModoArr: []
		};
	}

	//past in props of current loaction from Cord componenet
	componentDidMount() {
		axios
			.get(
				`https://bookit.modo.coop/api/v2/nearby?lat=${this.props.data.coords.latitude}&long=${this.props.data
					.coords.longitude}&distance=2000`
			)
			.then((result) => {
				result.data.Response.Locations.map((data) => {
					axios
						.get(`https://bookit.modo.coop/api/v2/location_list?location_id=${data.LocationID}`)
						.then((res) => {
							let info = Object.values(res.data.Response.Locations);
							let desc = info[0].ShortDescription;
							this.state.theModoArr.push(desc);
						});
				});
				this.setState({
					modoLocation: result.data.Response.Locations,
					loading: false
				});
			});
		axios.get('http://localhost:5000/cars').then((res) => {
			this.setState({
				zipLoc: res.data
			});
		});
		axios.get('http://localhost:5000/bikes').then((res) => {
			this.setState({
				mobiLoc: res.data
			});
			// console.log(this.state.mobiLoc);
		});

		this.setState({
			center: { lat: this.props.data.coords.latitude, lng: this.props.data.coords.longitude },
			zoom: 16
		});
	}

	changeMode = () => {
		if (this.state.mode === 'Cars') {
			this.setState({ mode: 'Bike' });
		} else if (this.state.mode === 'Bike') {
			this.setState({ mode: 'Cars' });
		}
	};

	handleChange = (address) => {
		this.setState({ address });
	};

	handleSelect = (address) => {
		axios
			.get(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC_f-DBHL8cc-MhQSPAYMdGRWkInlwY7GQ`
			)
			.then((res) => {
				console.log(res.data.results[0].geometry.location);

				var newCenter = res.data.results[0].geometry.location;
				this.setState({
					center: newCenter
				});
			});
	};

	render() {
		if (this.state.mode === 'Bike') {
			if (this.state.loading === true) {
				return <div className="loading">Loading...</div>;
			}
			return (
				<div className="map">
					<PlacesAutocomplete
						value={this.state.address}
						onChange={this.handleChange}
						onSelect={this.handleSelect}
					>
						{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
							<div className="searchBox">
								<input
									{...getInputProps({
										placeholder: 'Search Places ...',
										className: 'location-search-input searchBox-input'
									})}
								/>
								<div className="autocomplete-dropdown-container searchBox-drop">
									{loading && <div>Loading...</div>}
									{suggestions.map((suggestion) => {
										const className = suggestion.active
											? 'suggestion-item--active'
											: 'suggestion-item';
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
					<button className="modeChangeBtn" onClick={this.changeMode} type="button">
						{this.state.mode}
					</button>
					<ModoMap data={this.state} />
					<TableMap data={this.state} />
				</div>
			);
		} else if (this.state.mode === 'Cars') {
			if (this.state.loading === true) {
				return <div className="loading">Loading...</div>;
			}
			return (
				<div className="map">
					<PlacesAutocomplete
						value={this.state.address}
						onChange={this.handleChange}
						onSelect={this.handleSelect}
					>
						{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
							<div className="searchBox">
								<input
									{...getInputProps({
										placeholder: 'Search Places ...',
										className: 'location-search-input searchBox-input'
									})}
								/>
								<div className="autocomplete-dropdown-container searchBox-drop">
									{loading && <div>Loading...</div>}
									{suggestions.map((suggestion) => {
										const className = suggestion.active
											? 'suggestion-item--active'
											: 'suggestion-item';
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
					<button className="modeChangeBtn" onClick={this.changeMode} type="button">
						{this.state.mode}
					</button>
					<BikeMap data={this.state} />
					<TableMap data={this.state} />
				</div>
			);
		}
	}
}
