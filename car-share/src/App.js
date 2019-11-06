import React from 'react';
import './styles/main.css';
import { Route, Switch } from 'react-router-dom';

import Header from './Componenets/Header';
import MainBody from './Componenets/MainBody';
import ModoPart from './Componenets/ModoPart';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={MainBody} />
				<Route path="/modo/:LocationID" component={ModoPart} />
			</Switch>
		</div>
	);
}

export default App;
