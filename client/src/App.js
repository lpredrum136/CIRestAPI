import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./store";
import Routes from "./components/routing/Routes";

import Landing from "./components/layout/Landing";

import "./App.css";

const App = () => {
	return (
		<Provider store={myStore}>
			<Router>
				<Fragment>
					<Switch>
						<Route exact path="/" component={Landing} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
