import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/main.css';

import { Route, Switch } from 'react-router-dom';

import Header from './Componenets/Header';
import MainBody from './Componenets/MainBody';
import ModoPart from './Componenets/ModoPart';
import ZipPart from './Componenets/ZipPart';
import Cords from './Componenets/Cord';
import Login from './Componenets/Login';
import Register from './Componenets/Register';
import MobiPart from './Componenets/BikePart';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={MainBody} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/map" component={Cords} />
				<Route path="/modo/:LocationID" component={ModoPart} />
				<Route path="/zip/:ObjectID" render={(props) => <ZipPart {...props} />} />
				<Route path="/mobi/:ID" render={(props) => <MobiPart {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
