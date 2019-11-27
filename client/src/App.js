import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/main.css';

import { Route, Switch } from 'react-router-dom';

import Header from './Componenets/Header';
import MainBody from './Componenets/MainBody';
import ModoPart from './Componenets/ModoPart';
import ZipPart from './Componenets/ZipPart';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={MainBody} />
				<Route path="/modo/:LocationID" component={ModoPart} />
				<Route path="/zip/:ObjectID" render={(props) => <ZipPart {...props} />} />
			</Switch>
		</div>
	);
}

export default App;