import React, { Component } from 'react';
import axios from 'axios';
import Mobi from '../assets/icons/mobi.jpg';
import MobiHow1 from '../assets/images/mobiHow1.jpg';
import MobiHow2 from '../assets/images/mobiHow2.jpg';
import MobiSide from '../assets/images/mobiSide.jpg';
export default class BikePart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thisLoc: {}
		};
	}
	componentDidMount() {
		axios.get(`http://localhost:5000/bikes/${this.props.match.params.ID}`).then((res) => {
			console.log(res.data[0]);
			this.setState({ thisLoc: res.data[0] });
		});
		console.log(this.state.thisLoc);
	}

	render() {
		return (
			<div className="mobiBike">
				<h1 className="modoCar-title">
					<img className="modoCar__title-modo" src={Mobi} alt="mobi-bike" />
					{this.state.thisLoc.location}
				</h1>
				<div className="mobiPart">
					<img className="mobiPart-pic" src={MobiSide} alt="mobi bike" />
				</div>
				<div className="mobiPart-stall">
					<h3>Bike In Stall : {this.state.thisLoc.bikeInStall}</h3>
					<h3>Bike Not In Stall : {this.state.thisLoc.bikeNotInStall}</h3>
				</div>
				<div className="mobiPart__tips">
					<h3 className="mobiPart__tips-title">Tips and Tricks</h3>
					<div className="mobiPart__tips-pDiv">
						<img className="mobiPart__tips-pic" src={MobiHow1} alt="mobi-how" />
						<img className="mobiPart__tips-pic" src={MobiHow2} alt="mobi-how" />
					</div>
				</div>
			</div>
		);
	}
}
