import React, { Component } from 'react';
import axios from 'axios';

export default class ZipPart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carDetail: {}
		};
	}
	componentDidMount() {
		axios.get(`http://localhost:5000/cars/${this.props.match.params.ObjectID}`).then((res) => {
			this.setState({
				carDetail: res.data[0]
			});
			console.log(this.state.carDetail);
		});
	}
	render() {
		return (
			<div className="modoCar">
				<h1 className="modoCar-title">
					{/* <img className="modoCar__title-modo" src={Modo} alt="modo" /> */}
					{this.state.carDetail.location}
				</h1>
				<div className="modoPart">
					{/* <img className="modoPart-pic" src={data.pic} alt={data.Model} /> */}
					<div className="modoPart-wholeInfo">
						<h3 className="modoPart-des"> {`${this.state.carDetail.cars}`}</h3>
						<div className="modoPart__info">
							{/* <div className="modoPart__colorSeat">
                            <h4 className="modoPart__info-color ">{`Color: ${data.Colour}`}</h4>
                            <h4 className="modoPart__info-seats ">{`${data.Seats} Seats`}</h4>
                        </div> */}
							{/* <div className="modoPart-accBox">
                            <h4 className="modoPart-acc">Accessories:</h4>

                            {this.carAccessories(data)}
                        </div> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
