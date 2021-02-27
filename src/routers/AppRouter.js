import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import FolderScreen from '../screens/FolderScreen';
import HomeScreen from '../screens/HomeScreen';
import TrashScreen from '../screens/TrashScreen';

function AppRouter() {
	return (
		<Router>
			<div className="screen">
				<Sidebar />

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/" exact={true}>
						<HomeScreen />
					</Route>
					<Route path="/folders" exact={true}>
						<FolderScreen />
					</Route>
					<Route path="/trash" exact={true}>
						<TrashScreen />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
