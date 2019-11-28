import React, { Component } from 'react';
import 'axios';
import Cord from './Cord';

export default class MainBody extends Component {
	state = {
		mode: 'Cars',
		prevMode: 'Cars'
	};

	componentDidUpdate() {
		if (this.state.prevMode !== this.state.mode) {
			this.setState({
				prevMode: this.state.mode
			});
		}
	}

	changeMode = () => {
		if (this.state.mode === 'Cars') {
			this.setState({ mode: 'Bikes' });
		} else {
			this.setState({ mode: 'Cars' });
		}
	};
	render() {
		return (
			<div className="mapDiv">
				<button type="button" onClick={this.changeMode} className="switch-btn">
					{this.state.mode}
				</button>
				<Cord data={this.state} />
			</div>
		);
	}
}
