import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import PrivateRoute from './PrivateRoute';
import PrivateRouter from './PrivateRouter';

function AppRouter() {
	return (
		<Router basename="/my-drive">
			<div>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/login" exact={true}>
						<LoginScreen />
					</Route>
					<PrivateRoute path="/" component={PrivateRouter} />
					<Redirect to="/login" />
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
