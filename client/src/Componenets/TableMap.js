import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TableMap(props) {
	const [ tableMode, modeChange ] = useState('zipcar');
	const [ infoShowNumber, changeNumber ] = useState(10);

	const zipTable = props.data.zipLoc.map((data, index) => {
		if (index < infoShowNumber) {
			return (
				<div className="table__zip" key={data._id}>
					<Link className="table-links" to={`/zip/${data._id}`}>
						<h3 className="table__zip-location">{data.location}</h3>
					</Link>
				</div>
			);
		}
	});

	const modoTable = props.data.theModoArr.map((data, index) => {
		if (index < infoShowNumber) {
			return (
				<div className="table__zip" key={props.data.modoLocation[index].LocationID}>
					<Link className="table-links" to={`/modo/${props.data.modoLocation[index].LocationID}`}>
						<h3 className="table__zip-location">{data}</h3>
					</Link>
				</div>
			);
		}
	});

	const mobiTable = props.data.mobiLoc.map((data, index) => {
		if (index < infoShowNumber) {
			return (
				<div className="table__zip" key={data._id}>
					<Link className="table-links" to={`/mobi/${data._id}`}>
						<h3 className="table__zip-location">{data.location}</h3>
					</Link>
				</div>
			);
		}
	});

	window.onscroll = function(ev) {
		if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
			changeNumber(infoShowNumber + 2);
		}
	};

	const changetoZip = () => {
		modeChange('zipcar');
	};
	const changetoModo = () => {
		modeChange('modo');
	};
	const changetoMobi = () => {
		modeChange('mobi');
	};

	if (tableMode === 'zipcar') {
		return (
			<div className="table">
				<div className="table-select">
					<button type="button" className="table-sBtn" onClick={changetoZip}>
						ZipCar
					</button>
					<button type="button" className="table-sBtn" onClick={changetoModo}>
						Modo
					</button>
					<button type="button" className="table-sBtn" onClick={changetoMobi}>
						Mobi-Bikes
					</button>
				</div>
				<div className="table__flowTable">{zipTable}</div>
			</div>
		);
	} else if (tableMode === 'modo') {
		return (
			<div className="table">
				<div className="table-select">
					<button type="button" className="table-sBtn" onClick={changetoZip}>
						ZipCar
					</button>
					<button type="button" className="table-sBtn" onClick={changetoModo}>
						Modo
					</button>
					<button type="button" className="table-sBtn" onClick={changetoMobi}>
						Mobi-Bikes
					</button>
				</div>
				<div className="table__flowTable">{modoTable}</div>
			</div>
		);
	} else if (tableMode === 'mobi') {
		return (
			<div className="table">
				<div className="table-select">
					<button type="button" className="table-sBtn" onClick={changetoZip}>
						ZipCar
					</button>
					<button type="button" className="table-sBtn" onClick={changetoModo}>
						Modo
					</button>
					<button type="button" className="table-sBtn" onClick={changetoMobi}>
						Mobi-Bikes
					</button>
				</div>
				<div className="table__flowTable">{mobiTable}</div>
			</div>
		);
	}
}
