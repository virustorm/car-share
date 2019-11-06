import React, { Component } from 'react';
import 'axios';
import Cord from './Cord';

export default class MainBody extends Component {
	render() {
		return (
			<div className="mapDiv">
				<Cord />
			</div>
		);
	}
}
